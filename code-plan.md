# Code plan — look and feel

The words in `content/_index.md` stay. This plan is only how the page is presented. Nothing here is chosen yet.

The current page is one narrow column of default Pico CSS. The status line is a sentence. Every section has the same weight. That is why it feels flat.

## What would change

One static Hugo page, still no app server and no client framework. The same four blocks of text, read one at a time:

1. A header: title, the one-sentence lede, and chips.
2. A tab bar: Problem, Solution, Method, What changes.
3. One panel for the selected tab. The other three are in the page, hidden.
4. A quiet footer: initiator and email, unchanged.

The address bar carries the tab: `#problem`, `#solution`, `#method`, `#what-changes`. Opening the site with no hash shows Problem.

## Chips

Replace the sentence “Looking for contributors, sponsors, and early adopters.” with a label and three chips.

```
Looking for   [ Contributors ]  [ Sponsors ]  [ Early adopters ]
```

Chips are not links and not buttons. They do not filter the page. Small type, a border, a slight fill. They sit under the lede, in the header, and stay visible while the tabs change.

## Tabs

Proposal: real tabs, not a long scroll with a menu beside it. One large essay is what feels thin. A tab says “this is a part of the method” and shows only that part.

| Tab | What is already written |
| --- | --- |
| Problem | The CI, CD, CT gap and the five failures |
| Solution | The state machine, the in-memory calculation, the comparison |
| Method | The loop, the rules, the two aspects |
| What changes | The benefits, the closing lines |

Method is the longest part. Two ways to handle it:

- **A. One Method panel.** Loop, rules, and the two aspects stay in reading order. Proposed, because they are one argument.
- **B. A second row inside Method.** The loop, Rules, Two aspects. Easier to scan, easier to lose the thread.

On a narrow screen the tab labels scroll sideways. They do not wrap into a second cluttered row. Arrow keys move between tabs. The selected tab is a `tab`, the panel is a `tabpanel`.

Inside a panel, the text can stop looking like one list:

- The comparison becomes two labeled columns, not a data table.
- The loop becomes a numbered stepper.
- The rules become cards in two columns, one column on a phone.
- The benefits become rows: who, then what they gain.

The sentences do not change.

## Visual system

Drop Pico. It is what makes every heading, table, and paragraph look like the same template.

Shared pieces, whichever palette you pick:

- Self-hosted open-source fonts in `static/fonts/`. No font service at runtime.
- [Open Props](https://open-props.style/) for space, type scale, and focus rings. The layout itself is a short stylesheet.
- A page wider than the current 40rem column: header and tabs on a wide measure, text inside a panel still held to a readable line length.
- One accent color used only for the selected tab, the stepper numbers, and focus. Not for body text.

| Option | Page | Type | When it fits |
| --- | --- | --- | --- |
| 1. Paper | Warm off-white ground, ink text, a copper accent | A serif for the title, a sans for the text | A method statement that should feel published |
| 2. Ink | Cool near-black text on a gray-white ground, a blue accent | Sans throughout, tight and technical | A specification more than an essay |
| 3. Field | The existing dark ground `#0d1117`, light text, one bright accent | Sans throughout | A product surface. Harder for a long Method panel |

Proposal: option 1. Serif title, sans text, copper only on the active tab and the loop numbers. Options 2 and 3 stay available.

No product marks, no illustrations, no dashboard, no animation beyond the tab change.

## How it is built

Stay on Hugo. `content/_index.md` remains the source. A small script in the existing home layout groups each `h2` into a panel and builds the tab bar from those headings. The comparison, the loop, the rules, and the benefits get presentation classes from a heading or list render hook, not from a rewrite of the prose.

`task minify` still publishes `docs/`. The script is a few dozen lines, with no dependencies. If it does not run, the four sections are still in the page, one under another.

## Open questions

1. Tabs that show one section, or a sticky menu on the full scroll?
Tabs that show one section
2. Method as one panel, or a second row (loop, rules, two aspects)?
one panel
3. Palette 1, 2, or 3?
1
4. Chips worded as Contributors, Sponsors, and Early adopters, with “Looking for” beside them?
yes
