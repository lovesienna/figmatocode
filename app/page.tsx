const stats = [
  {
    title: "Active Dealers Now",
    value: "142",
    unit: "Case",
    delta: "+ 2%",
    deltaLabel: "vs last mo",
    tone: "success"
  },
  {
    title: "Pending Approvals",
    value: "8",
    unit: "Case",
    delta: "- 3%",
    deltaLabel: "vs last mo",
    tone: "warning"
  },
  {
    title: "New Registrations",
    value: "3",
    unit: "Case",
    delta: "- 1%",
    deltaLabel: "vs last mo",
    tone: "danger"
  }
];

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

const editionBars = [
  { label: "Standard", value: "120k", width: "100%" },
  { label: "Premium", value: "80k", width: "78%" },
  { label: "Enterprise", value: "50k", width: "54%" },
  { label: "Basic", value: "30k", width: "38%" }
];

const tableRows = [
  {
    code: "A11AD70701",
    name: "Metro Vehicle Agency",
    edition: "DLR",
    type: "Standard",
    menu: "SSC",
    status: "Active",
    date: "2024.02.25"
  },
  {
    code: "A11AD50502",
    name: "Seoul Motor Group",
    edition: "DGP",
    type: "Premium",
    menu: "SSC",
    status: "Active",
    date: "2024.03.20"
  },
  {
    code: "A11AD60612",
    name: "Green Energy Motors",
    edition: "DLR",
    type: "Standard",
    menu: "SSC",
    status: "Inactive",
    date: "2024.04.01"
  },
  {
    code: "A11AD60603",
    name: "Urban Mobility Hub",
    edition: "DGP",
    type: "Standard",
    menu: "SSC",
    status: "Inactive",
    date: "2024.05.10"
  },
  {
    code: "A11AD70701",
    name: "Metro Vehicle Agency",
    edition: "DLR",
    type: "Standard",
    menu: "SSC",
    status: "Active",
    date: "2024.06.05"
  },
  {
    code: "A11AD50502",
    name: "Seoul Motor Group",
    edition: "DGP",
    type: "Premium",
    menu: "SSC",
    status: "Active",
    date: "2024.08.30"
  },
  {
    code: "A11AD70701",
    name: "Metro Vehicle Agency",
    edition: "DLR",
    type: "Standard",
    menu: "SSC",
    status: "Active",
    date: "2024.11.05"
  },
  {
    code: "A11AD50502",
    name: "Seoul Motor Group",
    edition: "DGP",
    type: "Premium",
    menu: "SSC",
    status: "Active",
    date: "2025.12.18"
  },
  {
    code: "A11AD60601",
    name: "Elite Drive Systems",
    edition: "DLR",
    type: "Enterprise",
    menu: "Genesis",
    status: "Active",
    date: "2024.02.12"
  }
];

const sidebarMenus = [
  {
    title: "Favorites Menu",
    items: ["Roles", "Dealers"]
  },
  {
    title: "Admin Menu",
    items: [
      "Smart Test Drive",
      "Dealers",
      "Dealers for Distributor",
      "Dealers for dealer groups",
      "Editions",
      "Organization groups",
      "App download",
      "Administration"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-secondary text-content-primary">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-border-primary bg-bg-tertiary/40 px-4 py-6">
          <div className="flex items-center gap-2 px-2">
            <div className="h-7 w-7 rounded-full bg-content-primary"></div>
            <span className="text-lg font-semibold">DEALERBBS</span>
          </div>
          <div className="mt-6 space-y-6 text-sm text-content-secondary">
            {sidebarMenus.map((section) => (
              <div key={section.title}>
                <p className="px-2 text-xs font-semibold uppercase tracking-wide text-content-tertiary">
                  {section.title}
                </p>
                <div className="mt-2 space-y-1">
                  {section.items.map((item, index) => (
                    <button
                      key={item}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-bg-secondary ${
                        section.title === "Admin Menu" && index === 0
                          ? "bg-bg-secondary text-content-primary shadow-card"
                          : "text-content-secondary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-content-tertiary"></span>
                        {item}
                      </span>
                      <span className="text-content-tertiary">›</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-border-primary bg-bg-primary p-3 text-xs text-content-secondary">
            <p className="font-semibold text-content-primary">Smart Test Drive</p>
            <p className="mt-2">Real-time monitoring</p>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-border-primary bg-bg-primary px-6 py-4">
            <div className="flex items-center gap-3 rounded-full border border-border-primary bg-bg-secondary px-4 py-2 text-sm text-content-secondary">
              <SearchIcon />
              <input
                className="w-72 bg-transparent text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none"
                placeholder="Search"
              />
              <span className="rounded-full bg-bg-primary px-2 py-1 text-xxs text-content-tertiary">
                ⌘K
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-bg-primary text-xs">
                  🇺🇸
                </span>
                <span>English</span>
              </div>
              <button className="rounded-full border border-border-primary bg-bg-secondary p-2">
                <BellIcon />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-content-primary text-xs font-semibold text-bg-primary">
                D1
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-content-tertiary">
                  <HomeIcon />
                  <span>Dealers</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <h1 className="text-2xl font-semibold">Dealers</h1>
                  <span className="inline-flex items-center justify-center rounded border border-border-primary bg-bg-secondary px-2 py-1 text-xs text-content-secondary">
                    ★
                  </span>
                </div>
              </div>
              <button className="rounded-full bg-content-primary px-4 py-2 text-sm font-semibold text-bg-primary">
                + Create dealer
              </button>
            </div>

            <section className="grid gap-4 lg:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-primary bg-bg-primary p-5 shadow-card"
                >
                  <p className="text-sm font-semibold text-content-primary">
                    {item.title}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <span className="text-sm text-content-tertiary">{item.unit}</span>
                    <span
                      className={`rounded-full px-2 py-1 text-xxs font-semibold ${
                        item.tone === "success"
                          ? "bg-emerald-50 text-accent-emerald"
                          : item.tone === "warning"
                          ? "bg-amber-50 text-accent-amber"
                          : "bg-rose-50 text-accent-rose"
                      }`}
                    >
                      {item.delta} {item.deltaLabel}
                    </span>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-4 xl:grid-cols-3">
              <div className="rounded-xl border border-border-primary bg-bg-primary p-5 shadow-card xl:col-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Dealer Growth Trend</p>
                  <div className="flex gap-3 text-xs text-content-tertiary">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={
                          index === 0
                            ? "border-b-2 border-content-primary pb-1 text-content-primary"
                            : "pb-1"
                        }
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 h-40 rounded-lg border border-border-primary bg-gradient-to-t from-emerald-100 via-emerald-50 to-bg-primary p-4">
                  <div className="flex h-full items-end justify-between text-xxs text-content-tertiary">
                    {["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"].map(
                      (year, index) => (
                        <div key={year} className="flex flex-col items-center gap-2">
                          <div
                            className="w-4 rounded-full bg-accent-green"
                            style={{ height: `${20 + index * 10}px` }}
                          ></div>
                          <span>{year}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border-primary bg-bg-primary p-5 shadow-card xl:col-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Active Dealer Goal</p>
                  <div className="flex gap-3 text-xs text-content-tertiary">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={
                          index === 0
                            ? "border-b-2 border-content-primary pb-1 text-content-primary"
                            : "pb-1"
                        }
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex h-40 items-center justify-center">
                  <div className="relative flex h-32 w-32 items-center justify-center">
                    <div className="absolute h-32 w-32 rounded-full border-[10px] border-emerald-100"></div>
                    <div className="absolute h-32 w-32 rounded-full border-[10px] border-transparent border-t-accent-green border-r-accent-green"></div>
                    <span className="text-2xl font-semibold">84%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border-primary bg-bg-primary p-5 shadow-card xl:col-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Dealers by Edition</p>
                  <div className="flex gap-3 text-xs text-content-tertiary">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        className={
                          index === 0
                            ? "border-b-2 border-content-primary pb-1 text-content-primary"
                            : "pb-1"
                        }
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {editionBars.map((bar) => (
                    <div key={bar.label} className="space-y-1 text-xs">
                      <div className="flex items-center justify-between text-content-secondary">
                        <span>{bar.label}</span>
                        <span>{bar.value}</span>
                      </div>
                      <div className="h-6 rounded-md bg-bg-tertiary">
                        <div
                          className="h-6 rounded-md bg-gradient-to-r from-accent-green to-accent-green-soft"
                          style={{ width: bar.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-border-primary bg-bg-primary p-5 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold">Dealer List</h2>
                <div className="flex flex-wrap items-center gap-2 text-xs text-content-secondary">
                  <div className="flex items-center gap-2 rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    <SearchIcon />
                    <input
                      className="w-60 bg-transparent text-xs placeholder:text-content-tertiary focus:outline-none"
                      placeholder="Search for dealer code, dealer name"
                    />
                  </div>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    Dealer Type
                  </button>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    Side Menu Set
                  </button>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    Status
                  </button>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    2026.01.15 - 2026.08.30
                  </button>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    Edit Columns
                  </button>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-3 py-2">
                    Excel
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-xs">
                  <thead className="text-content-tertiary">
                    <tr className="border-b border-border-primary">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">Dealer Code</th>
                      <th className="px-3 py-3">Name</th>
                      <th className="px-3 py-3">Edition</th>
                      <th className="px-3 py-3">Dealer Type</th>
                      <th className="px-3 py-3">Side Menu Set</th>
                      <th className="px-3 py-3">Active</th>
                      <th className="px-3 py-3">Creation Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-content-secondary">
                    {tableRows.map((row) => (
                      <tr key={`${row.code}-${row.date}`} className="border-b border-border-primary">
                        <td className="px-3 py-3">
                          <input type="checkbox" className="h-3 w-3 rounded border-border-secondary" />
                        </td>
                        <td className="px-3 py-3 font-semibold text-content-primary">{row.code}</td>
                        <td className="px-3 py-3 text-content-primary">{row.name}</td>
                        <td className="px-3 py-3">{row.edition}</td>
                        <td className="px-3 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xxs font-semibold ${
                              row.type === "Standard"
                                ? "bg-accent-indigo-soft text-accent-indigo"
                                : row.type === "Premium"
                                ? "bg-rose-50 text-accent-rose"
                                : "bg-emerald-50 text-accent-emerald"
                            }`}
                          >
                            {row.type}
                          </span>
                        </td>
                        <td className="px-3 py-3">{row.menu}</td>
                        <td className="px-3 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xxs font-semibold ${
                              row.status === "Active"
                                ? "bg-emerald-50 text-accent-emerald"
                                : "bg-bg-tertiary text-content-tertiary"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-content-primary">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-content-secondary">
                <div className="flex items-center gap-2">
                  <span>Row Count :</span>
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-2 py-1">
                    10
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-2 py-1">
                    ‹
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`rounded-full px-2 py-1 ${
                        page === 1 ? "bg-bg-tertiary text-content-primary" : "border border-border-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="rounded-full border border-border-primary bg-bg-secondary px-2 py-1">
                    ›
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 text-content-tertiary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.5 16.5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 text-content-tertiary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 18H9" />
      <path d="M6 18V11a6 6 0 0 1 12 0v7" />
      <path d="M5 18h14" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 text-content-tertiary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 10.5L12 4l8 6.5" />
      <path d="M6.5 9.5V20h11V9.5" />
    </svg>
  );
}
