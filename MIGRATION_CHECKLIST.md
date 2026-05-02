# Project Migration Checklist

**Goal:** confirm the working copy of `farooqui-digital` lives only on the local
machine and not in any cloud-synced folder (OneDrive, iCloud, Dropbox, etc.).
The GitHub repo at `https://github.com/ymfarooqui/farooqui-digital.git` remains
the single source of truth — this checklist is about cleaning up local copies
so you only edit one place.

Hand this file to Copilot / Claude / any AI agent and ask it to walk through
each remaining step on **your machine**.

---

## Status snapshot (last updated 2026-05-02)

| Step | Status |
|---|---|
| 1 — Canonical local copy at `~/Projects/farooqui-digital` healthy & in sync | ✅ **Done** |
| 2 — Search for other copies on this machine | ⏳ **Partially done** — one known stale copy below |
| 3 — Verify the stale copy is safe to delete | ❌ **Not done** |
| 4 — Delete the stale copy (and its OneDrive cloud counterpart) | ❌ **Not done** |
| 5 — Lock the project out of future cloud-sync | ❌ **Not done** |
| 6 — Confirm dev environment still works from `~/Projects/farooqui-digital` | ❌ **Not done** |
| 7 — Final report | ❌ **Not done** |

### Known stale copy

```
/Users/yaseenfarooqui/Library/CloudStorage/OneDrive-Personal/Documents/PathLogic Digital/PathLogic Digital/PLD Web Project
```

This copy is **2 commits behind** the canonical copy and GitHub. It cannot
push to GitHub in its current state (git would reject as non-fast-forward),
so the live site is not at risk from it. It still needs to be removed so you
do not edit the wrong folder.

---

## Step 1 — Canonical local copy ✅ DONE

Verified on 2026-05-02:

- Path: `/Users/yaseenfarooqui/Projects/farooqui-digital`
- Remote: `https://github.com/ymfarooqui/farooqui-digital.git`
- Branch tracking: `origin/main`
- Status: clean working tree, 0 ahead / 0 behind GitHub
- Latest commit at the time: `e982524 add MIGRATION_CHECKLIST.md ...`

Re-verify any time with:

```bash
cd ~/Projects/farooqui-digital
git status
git fetch origin --quiet
git rev-list --left-right --count HEAD...origin/main   # should print "0  0"
```

If that ever drifts, re-sync with `git pull --ff-only origin main` or
re-clone fresh.

---

## Step 2 — Search for any other copies on this machine

The known stale copy is listed above. Confirm there are no others:

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

**Pass criteria:** the only `farooqui-digital` returned is
`~/Projects/farooqui-digital`. The only `PLD Web Project` returned is the
known OneDrive path above (which Step 4 will remove). Any **other** match
is unexpected and the AI should stop and surface it.

Specifically check these locations, which are the most common offenders:

- `~/Library/CloudStorage/OneDrive-*/...` (macOS OneDrive)
- `~/OneDrive/...` (Windows OneDrive)
- `~/Dropbox/...`
- `~/Library/Mobile Documents/com~apple~CloudDocs/...` (iCloud Drive)
- `~/Documents/...` and `~/Desktop/...` if iCloud "Desktop & Documents" is on
- `~/Downloads/...`

---

## Step 3 — Verify the stale OneDrive copy is safe to delete

The OneDrive copy was used during a working session and may contain
uncommitted experiments. Confirm before deleting:

```bash
cd "/Users/yaseenfarooqui/Library/CloudStorage/OneDrive-Personal/Documents/PathLogic Digital/PathLogic Digital/PLD Web Project"

# 1. Anything uncommitted?
git status

# 2. Any commits not on GitHub?
git fetch origin --quiet
git log origin/main..HEAD --oneline
```

**If `git status` shows uncommitted changes:**
1. Save them as a patch: `git diff > /tmp/onedrive-stale.patch`
2. Show the user the patch and ask whether to keep or discard. Do **not**
   delete until the user decides.

**If `git log origin/main..HEAD` prints any commits:**
Those are local-only commits that exist nowhere else. Stop and surface
them. (Expected output is empty — the OneDrive copy is behind GitHub, not
ahead.)

**If both checks are empty:** the copy is safe to delete.

---

## Step 4 — Delete the stale OneDrive copy

Only after Step 3 passes:

```bash
rm -rf "/Users/yaseenfarooqui/Library/CloudStorage/OneDrive-Personal/Documents/PathLogic Digital/PathLogic Digital/PLD Web Project"
```

**Then handle the OneDrive cloud copy.** Local deletion only removes the
synced version on this Mac; OneDrive may still hold a cloud copy and could
re-sync it back. To prevent that:

1. Open OneDrive in a browser (`https://onedrive.live.com`).
2. Navigate to `Documents → PathLogic Digital → PathLogic Digital`.
3. Confirm `PLD Web Project` is gone there too. If it isn't, delete it
   from the web UI.
4. Empty the OneDrive **Recycle Bin** afterwards so it cannot restore.

Optional cleanup: the parent folder `PathLogic Digital/PathLogic Digital/`
is now empty and can be removed too if you do not use it for anything else.

---

## Step 5 — Lock the project out of future cloud-sync

The project should never live under a cloud-sync root again.

**macOS:**
- System Settings → Apple ID → iCloud → iCloud Drive → Options →
  confirm **"Desktop & Documents Folders" is OFF**, OR keep the project
  outside `~/Desktop` and `~/Documents`.
- Do not move or copy the project into any subfolder of
  `~/Library/CloudStorage/...`.
- The canonical home (`~/Projects/farooqui-digital`) is outside all
  sync roots — leave it there.

**Windows:**
- Right-click the project folder → uncheck "Always keep on this device" if
  it is somehow inside OneDrive (better: move it out of OneDrive entirely).
- Make sure the project lives outside `C:\Users\<you>\OneDrive\` and outside
  any `Dropbox`, `Google Drive`, `Box` roots.

---

## Step 6 — Confirm the dev environment still works

From the canonical local copy:

```bash
cd ~/Projects/farooqui-digital
npm install                 # only needed first time after the move
npm run dev
```

**Pass criteria:**
- Dev server prints `Ready in <time>`
- Site loads at `http://localhost:3000` (or 3001 if 3000 is taken)
- Hero section shows the website-performance image on the right
- About page shows the headshot photo in the FounderBio block
- No errors in the browser devtools console

---

## Step 7 — Final report

The AI should report back with one of:

- `PASS: only ~/Projects/farooqui-digital exists, it is clean and current,
  cloud-sync roots contain no copies, dev server runs, hero and headshot
  images render.`

- `FAIL: <list of remaining issues>` — and explain why each could not be
  resolved (uncommitted work, unmerged commits, sync still running, etc.)
  so the user can decide.

---

## Notes for the human

- Your live site (`farooquidigital.com`) and GitHub repo are completely
  unaffected by anything in this checklist. **The deployed site is built
  by your host directly from GitHub — your local folder location is
  irrelevant to it.**
- The OneDrive copy cannot accidentally overwrite GitHub: it is behind
  `origin/main` and a normal `git push` will be rejected as
  non-fast-forward. Only a deliberate `git push --force` could damage
  GitHub, and you should never run that.
- Editing workflow from now on: open `~/Projects/farooqui-digital` in
  VS Code, edit, commit, push. Always run `npm run build` before pushing
  if you changed anything substantial — if `build` succeeds locally, the
  deploy will succeed.
- Recovery if anything goes wrong:
  ```bash
  cd ~/Projects
  rm -rf farooqui-digital     # only if you are sure nothing is uncommitted
  git clone https://github.com/ymfarooqui/farooqui-digital.git
  cd farooqui-digital
  npm install
  ```
