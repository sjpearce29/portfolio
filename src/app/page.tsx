const pages = [
  ["01", "About", "A CV, written in my own words."],
  ["02", "Lego wishlist", "Sets I want, not a catalogue of everything I own."],
  ["03", "Golf", "A small app for the game."],
  ["04", "A small game", "Snake, or a platformer."],
] as const;

const work = [
  [
    "spotify-widget",
    "https://github.com/sjpearce29/spotify-widget",
    "A Spotify control for while I'm working. A title and a sentence so far.",
  ],
  [
    "database-sandbox",
    "https://github.com/sjpearce29/database-sandbox",
    "A place to try SQL before it becomes part of something else. Empty.",
  ],
  [
    "python-sandbox",
    "https://github.com/sjpearce29/python-sandbox",
    "The same idea, for Python. Empty.",
  ],
  [
    "llm-learning",
    "https://github.com/sjpearce29/llm-learning",
    "A public log of learning language models. The first program sends a prompt and prints the reply.",
  ],
] as const;

const languages = ["TypeScript", "JavaScript", "SQL", "Python"] as const;

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-16">
      <p className="text-xs tracking-[0.16em] text-muted">SJPEARCE29</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight">Sam Pearce</h1>
      <p className="mt-4 leading-relaxed text-muted">
        One page. It lists the parts of this site and the other work I am
        starting. None of the four pages exist yet.
      </p>

      <Section title="On this site">
        <ol>
          {pages.map(([index, name, detail]) => (
            <li key={name} className="border-b border-rule py-3">
              <p>
                <span className="mr-3 text-sm tabular-nums text-muted">
                  {index}
                </span>
                <span className="font-medium">{name}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Other work">
        <ul>
          {work.map(([name, href, detail]) => (
            <li key={name} className="border-b border-rule py-3">
              <p>
                <a
                  href={href}
                  className="font-medium underline decoration-rule underline-offset-4 hover:decoration-foreground"
                >
                  {name}
                </a>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <ul className="flex flex-wrap gap-2 py-4">
          {languages.map((name) => (
            <li
              key={name}
              className="border border-label-text bg-label px-2.5 py-1 text-sm tracking-wide text-label-text"
            >
              {name}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
        {title}
      </h2>
      <div className="mt-4 border-t border-rule">{children}</div>
    </section>
  );
}
