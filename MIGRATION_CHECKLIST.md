# Project Migration Checklist

**Goal:** confirm the working copy of `farooqui-digital` lives only on the local
machine and not in any cloud-synced folder (OneDrive, iCloud, Dropbox, etc.).
The GitHub repo at `https://github.com/ymfarooqui/farooqui-digital.git` remains
the single source of truth — this checklist is about cleaning up local copies
so you only edit one place.

Hand this file to Copilot / Claude / any AI agent and ask it to walk through
each step on **your machine**.

---

## Canonical local location

The project should live at exactly this path on macOS:

```
/Users/yaseenfarooqui/Projects/farooqui-digital
```

If you are on a Windows machine, the equivalent canonical location is:

```
C:\Users\<your-user>\Projects\farooqui-digital
```

Anything anywhere else is a stale copy and should be removed after this
checklist passes.

---

## Step 1 — Verify the canonical local copy is healthy

Open a fresh terminal (PowerShell on Windows, Terminal on macOS) and run:

```bash
cd ~/Projects/farooqui-digital      # macOS
# or:  cd %USERPROFILE%\Projects\farooqui-digital   (Windows cmd)
git status
git log --oneline -5
git remote -v
```

**Pass criteria:**
- `git status` reports `nothing to commit, working tree clean` (or only files
  you intentionally have not committed).
- `git log` shows commits ending in something like
  `01c3d5f add hero performance image and founder headshot` as the most
  recent commit (or newer).
- `git remote -v` shows
  `origin  https://github.com/ymfarooqui/farooqui-digital.git`
  for both fetch and push.

If any of these fail, **stop** and re-clone:

```bash
cd ~/Projects
rm -rf farooqui-digital                 # or: rmdir /s farooqui-digital  (Windows)
git clone https://github.com/ymfarooqui/farooqui-digital.git
cd farooqui-digital
npm install
```

---

## Step 2 — Find and list every other copy of the project on this machine

Run this search to find all directories that look like the project:

**macOS:**
```bash
mdfind -name "farooqui-digital" 2>/dev/null
mdfind -name "PLD Web Project" 2>/dev/null
find ~ -maxdepth 6 -type d \( -name "farooqui-digital" -o -name "PLD Web Project" \) 2>/dev/null
```

**Windows (PowerShell):**
```powershell
Get-ChildItem -Path "$env:USERPROFILE" -Recurse -Directory -Force -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -in 'farooqui-digital','PLD Web Project' } |
  Select-Object FullName
```

Specifically check these locations, which are the most common offenders:

- `~/Library/CloudStorage/OneDrive-*/Documents/.../PLD Web Project` (macOS OneDrive)
- `~/OneDrive/...` (Windows OneDrive)
- `~/Dropbox/...`
- `~/Library/Mobile Documents/com~apple~CloudDocs/...` (iCloud Drive)
- `~/Documents/...` and `~/Desktop/...` if iCloud "Desktop & Documents" is on
- `~/Downloads/...`

**Pass criteria:** the **only** matching directory should be
`~/Projects/farooqui-digital`. Any other match is a stale copy.

---

## Step 3 — For each stale copy found, verify it is safe to delete

For every stale directory the search returned (call it `<STALE_PATH>`):

```bash
cd "<STALE_PATH>"
git status
git log --oneline -5 2>/dev/null || echo "not a git repo"
```

**If it has uncommitted changes** (anything in `git status` other than
"working tree clean"), the AI should:
1. Print the diff: `git diff > /tmp/stale-diff.patch`
2. Tell the user about the uncommitted changes and the patch location
3. **Stop and wait for the user to decide.** Never delete uncommitted work.

**If it has commits not on `origin/main`:**
```bash
git fetch origin
git log origin/main..HEAD --oneline
```
If that prints any commits, those are local-only. Stop and surface them.

**If it is clean (no uncommitted changes, all commits already on origin/main):**
the copy is safe to delete.

---

## Step 4 — Delete each verified-safe stale copy

Only after Step 3 passes for that path:

**macOS:**
```bash
rm -rf "<STALE_PATH>"
```

**Windows (PowerShell):**
```powershell
Remove-Item -Recurse -Force "<STALE_PATH>"
```

For OneDrive specifically: also confirm the file is removed from the cloud
copy. Open OneDrive in a browser and verify the folder is gone there too,
otherwise it will re-sync down. You can also right-click the OneDrive folder
in Finder/Explorer and unsync that subfolder from your machine before
deleting locally.

---

## Step 5 — Prevent future cloud-sync of this project

The project should never live under a cloud-sync root again. To enforce:

**macOS:**
- System Settings → Apple ID → iCloud → iCloud Drive → Options → confirm
  "Desktop & Documents Folders" is **off**, OR keep the project outside
  `~/Desktop` and `~/Documents` (use `~/Projects` or `~/Developer`).
- Do not move the project under `~/Library/CloudStorage/...`.

**Windows:**
- Right-click the project folder → "Always keep on this device" should be
  unchecked if it is inside OneDrive (better: move it out of OneDrive).
- Make sure the project lives outside `C:\Users\<you>\OneDrive\` and outside
  any `Dropbox`, `Google Drive`, `Box` roots.

---

## Step 6 — Confirm the dev environment still works

From the canonical local copy:

```bash
cd ~/Projects/farooqui-digital
npm install
npm run dev
```

**Pass criteria:** dev server prints `Ready in <time>` and the site loads at
`http://localhost:3000` (or 3001 if 3000 is taken). Open it and verify:

- [ ] Hero shows the website-performance image on the right.
- [ ] About page shows the headshot photo in the FounderBio block.
- [ ] No console errors in the browser devtools.

---

## Step 7 — Final report

The AI should report back with one of:

- `PASS: only ~/Projects/farooqui-digital exists, it is clean and current,
  dev server runs, no stale copies remain.`

- `FAIL: stale copies remain at <list of paths>` — and explain why each
  could not be deleted (uncommitted work, unmerged commits, etc.) so the
  user can decide.

---

## Notes for the human

- Your live site (`farooquidigital.com`) and GitHub repo are completely
  unaffected by anything in this checklist. This is purely about cleaning
  up local working copies.
- After this passes, your editing workflow is: open
  `~/Projects/farooqui-digital` in VS Code, edit, commit, push. Nothing
  else.
- If something goes wrong, the GitHub repo always has a recoverable copy:
  `git clone https://github.com/ymfarooqui/farooqui-digital.git`.
