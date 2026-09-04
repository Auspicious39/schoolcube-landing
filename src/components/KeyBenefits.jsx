const COLORS = {
  navy: "#203684",
  ink: "#2B3674",
  sub: "#A3AED0",
  bodyText: "#475467",
  cardBg: "#F6F6F6",
  white: "#FFFFFF",
  bluePrimary: "#4318FF",
  blueLight: "#7090FF",
  blueSoft: "#A3AED0",
  border: "#E9EDF7",
};

function Panel({ children, className = "" }) {
  return (
    <div
      className={`min-h-[11.875rem] w-full overflow-hidden rounded-[1rem] bg-white p-4 sm:p-6 shadow-[0rem_1.125rem_2.5rem_rgba(112,144,176,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ title, description, children }) {
  return (
    <div
      className="flex w-full max-w-full flex-col justify-between gap-5 rounded-[1rem] px-4 pb-6 pt-6 sm:px-5 md:w-full md:max-w-[28.125rem] md:gap-[1.63rem] md:rounded-[1.3725rem] md:pb-[1.83rem] md:pl-[1.75rem] md:pr-[1.75rem] md:pt-[1.83rem]"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      <div>
        <h3 className="mb-3 text-[1.125rem] font-bold leading-snug md:text-[1.25rem]" style={{ color: "#000000CC" }}>
          {title}
        </h3>
        <p className="text-[0.875rem] leading-relaxed md:text-[1rem]" style={{ color: "#666666" }}>
          {description}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}

/* 1. Attendance Mini Bars */
function AttendanceMiniBars() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[3.75rem] w-[3.1875rem] md:h-[4.5625rem] md:w-[3.875rem]"
    >
      <defs>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6FBBFF" />
          <stop offset="45%" stopColor="#95CBFF" />
          <stop offset="100%" stopColor="#E5F3FF" />
        </linearGradient>
      </defs>
      <rect x="0" y="100" width="60" height="140" rx="30" fill="#E9EFFF" />
      <rect x="0" y="135" width="60" height="105" rx="30" fill="url(#barGradient)" />
      <rect x="70" y="60" width="60" height="180" rx="30" fill="#E9EFFF" />
      <rect x="70" y="100" width="60" height="140" rx="30" fill="url(#barGradient)" />
      <rect x="140" y="0" width="60" height="240" rx="30" fill="#E8F1FF" />
      <rect x="140" y="60" width="60" height="180" rx="30" fill="url(#barGradient)" />
    </svg>
  );
}

function UpToDateInformation() {
  return (
    <Card
      title="Up to date Information"
      description="We take pride in collecting and analyzing complete and accurate data on students, staff, and parents."
    >
      <Panel>
        <div className="mb-4 flex justify-end">
          <div className="flex items-center gap-2 bg-[#F6F6F6] text-[0.6875rem] font-medium text-[#475467]">
            Last Synced: 2mins ago
          </div>
        </div>
        <div className="flex justify-center gap-6 sm:gap-8 md:gap-20">
          <div>
            <div className="mb-1 text-[0.625rem] font-medium text-[#475467]">Students Attendance</div>
            <div className="mb-3 text-[1rem] font-medium text-[#475467]">98%</div>
            <AttendanceMiniBars />
          </div>
          <div>
            <div className="mb-1 text-[0.625rem] font-medium text-[#475467]">Staff Attendance</div>
            <div className="mb-3 text-[1rem] font-medium text-[#475467]">78%</div>
            <AttendanceMiniBars />
          </div>
        </div>
      </Panel>
    </Card>
  );
}

/* 2. Data Analysis Bar Chart */
const COMBINED_CHART_DATA = [
  { label: "JSS1A" },
  { label: "JSS1C" },
  { label: "JSS1D" },
  { label: "JSS2A" },
  { label: "JSS2B" },
  { label: "JSS2C" },
  { label: "JSS2D" },
  { label: "JSS3A" },
  { label: "SSS2A" },
  { label: "SSS2B" },
  { label: "SSS2C" },
  { label: "SSS3A" },
];

function DataAnalysis() {
  return (
    <Card
      title="Data Analysis"
      description="Schoolcube.net provides clear reports and data analysis through the use of tables and charts."
    >
      <Panel className="p-3 sm:p-5">
        <div className="mb-3">
          <div className="text-[0.875rem] font-bold text-[#101828] sm:text-[1rem]">
            2021/2022 Third Semester Students
          </div>
          <div className="mt-1 flex justify-end gap-3 text-[0.6875rem] font-medium text-[#1E91FF]">
            <span>Students ↗</span>
            <span>Staff ↗</span>
          </div>
        </div>

        <div className="relative flex h-[7.5rem] w-full items-end pt-2">
          <div className="flex h-full w-6 flex-col justify-between pb-4 pr-1 text-right text-[0.5rem] text-[#66717F] sm:text-[0.5625rem]">
            <span>250</span>
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-5 left-7 top-2 flex flex-col justify-between">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-full border-b border-dashed border-[#EAECF0]" />
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-1 items-end pl-1">
            <div className="flex h-full w-[20%] items-end pr-0.5">
              <div
                className="h-[30%] w-full rounded-t-[0.125rem]"
                style={{ background: "linear-gradient(180deg, #6BB9FF 0%, #9DD1FF 45.67%, #FFFFFF 100%)" }}
              />
            </div>
            <div className="flex h-full w-[20%] items-end pr-0.5">
              <div
                className="h-[70%] w-full rounded-t-[0.125rem]"
                style={{ background: "repeating-linear-gradient(135deg, #A3C9FF 0 0.125rem, #E6EFFC 0.125rem 0.3125rem)" }}
              />
            </div>
            <div className="flex h-full w-[20%] items-end pr-0.5">
              <div
                className="h-[32%] w-full rounded-t-[0.125rem]"
                style={{ background: "linear-gradient(180deg, #6BB9FF 0%, #9DD1FF 45.67%, #FFFFFF 100%)" }}
              />
            </div>
            <div className="flex h-full w-[20%] items-end pr-0.5">
              <div
                className="h-[20%] w-full rounded-t-[0.125rem]"
                style={{ background: "repeating-linear-gradient(135deg, #A3C9FF 0 0.125rem, #E6EFFC 0.125rem 0.3125rem)" }}
              />
            </div>
            <div className="flex h-full w-[10%] items-end pr-0.5">
              <div
                className="h-[100%] w-full rounded-t-[0.125rem]"
                style={{ background: "linear-gradient(180deg, #6BB9FF 0%, #9DD1FF 45.67%, #FFFFFF 100%)" }}
              />
            </div>
            <div className="flex h-full w-[10%] items-end">
              <div
                className="h-[32%] w-full rounded-t-[0.125rem]"
                style={{ background: "repeating-linear-gradient(135deg, #A3C9FF 0 0.125rem, #E6EFFC 0.125rem 0.3125rem)" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-1 flex w-full pl-6 text-center text-[0.4375rem] text-[#66717F] sm:text-[0.5rem]">
          {COMBINED_CHART_DATA.map((d, i) => (
            <div key={i} className="flex-1 truncate">
              {d.label}
            </div>
          ))}
        </div>
      </Panel>
    </Card>
  );
}

/* 3. System Uptime Radial Gauge */
function SystemUptimeGauge() {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto max-h-[8.75rem] w-full max-w-[22.5rem]"
    >
      <defs>
        <linearGradient id="uptimeTickGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6FBBFF" />
          <stop offset="60%" stopColor="#95CBFF" />
          <stop offset="100%" stopColor="#E5F3FF" />
        </linearGradient>
      </defs>

      <text x="170" y="15" fill="#475467" fontSize="18" fontWeight="500" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif">
        System Uptime
      </text>
      <text x="75" y="75" fill="#475467" fontSize="15" fontWeight="500" textAnchor="end" fontFamily="Plus Jakarta Sans, sans-serif">
        Stability Score
      </text>
      <text x="285" y="75" fill="#475467" fontSize="15" fontWeight="500" textAnchor="start" fontFamily="Plus Jakarta Sans, sans-serif">
        Reliability
      </text>
      <text x="180" y="140" fill="#475467" fontSize="20" fontWeight="500" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif">
        98%
      </text>

      <g transform="translate(180, 150)">
        {Array.from({ length: 21 }, (_, i) => -90 + i * 9).map((angle, index) => (
          <g key={index} transform={`rotate(${angle})`}>
            <rect x="-4" y="-110" width="8" height="28" rx="4" fill="#EEF5FF" />
            <rect x="-4" y="-104" width="8" height="22" rx="4" fill="url(#uptimeTickGradient)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function EasyEffectiveManagement() {
  return (
    <Card
      title="Easy & Effective Management"
      description="Schoolcube.net is intuitive, clear and easy to use. It provides 24/7 system stability and reliability."
    >
      <Panel className="relative flex items-center justify-center text-center">
        <SystemUptimeGauge />
      </Panel>
    </Card>
  );
}

/* 4. Donut Chart */
function SubscriptionDonut({ percent = 90 }) {
  const r = 52;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      className="h-[6.25rem] w-[6.25rem] md:h-[8.125rem] md:w-[8.125rem]"
    >
      <circle cx="65" cy="65" r={r} fill="none" stroke="#CAE3FF" strokeWidth="12" />
      <circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="#6FBBFF"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(60 65 65)"
      />
      <text x="65" y="72" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1D2129">
        {percent}%
      </text>
    </svg>
  );
}

function CostEffective() {
  return (
    <Card
      title="Cost Effective"
      description="Schoolcube packages come at almost no cost to its users."
    >
      <Panel className="flex flex-col items-center justify-center">
        <SubscriptionDonut percent={90} />
        <div className="mt-3 flex items-center gap-2 text-[0.75rem] text-[#4E5969]">
          <span className="inline-block h-3 w-1 rounded-sm bg-[#339BFE]" />
          Subscription Comparison
        </div>
      </Panel>
    </Card>
  );
}

/* 5. Security Shield SVG */
function Security() {
  return (
    <Card
      title="Security"
      description="All data on Schoolcube.net is protected by high-profile security."
    >
      <Panel className="flex flex-col items-center justify-center py-6">
        <svg
          viewBox="0 0 240 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[6.1875rem] w-[5.625rem]"
        >
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6FBBFF" />
              <stop offset="49.04%" stopColor="#7DBAF1" />
              <stop offset="100%" stopColor="#E5F3FF" />
            </linearGradient>
          </defs>
          <path d="M 110 5.4 C 75 18 35 32 10 39.5 C 9 60 9 100 10 100 L 110 64.5 Z" fill="#6FBBFF" />
          <path d="M 130 5.4 C 165 18 205 32 230 39.5 C 231 60 231 100 230 100 L 130 64.5 Z" fill="#6FBBFF" />
          <path d="M 10 119 L 110 83.5 V 254.6 C 47.4 227 15 174 10 119 Z" fill="url(#shieldGradient)" />
          <path d="M 230 119 L 130 83.5 V 254.6 C 192.6 227 225 174 230 119 Z" fill="url(#shieldGradient)" />
        </svg>
        <div className="mt-4 text-[0.75rem] text-[#4E5969]">Data Encryption</div>
      </Panel>
    </Card>
  );
}

/* 6. Data Backup Lock SVG */
function DataBackup() {
  return (
    <Card
      title="Data Backup"
      description="Data is backed up automatically on a daily, weekly and monthly basis."
    >
      <Panel className="flex flex-col items-center justify-center py-6">
        <svg
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[6.4375rem] w-[6.25rem]"
        >
          <defs>
            <linearGradient id="lockBodyGradient" x1="100" y1="80" x2="100" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6FBBFF" />
              <stop offset="46.63%" stopColor="#99CFFF" />
              <stop offset="100%" stopColor="#C6E4FF" />
            </linearGradient>
          </defs>
          <path d="M 50 100 V 60 A 50 50 0 0 1 150 60 V 100" stroke="#66B5FF" strokeWidth="15" strokeLinecap="round" fill="none" />
          <rect x="10" y="85" width="180" height="125" rx="36" fill="url(#lockBodyGradient)" />
          <circle cx="60" cy="147" r="10" fill="white" />
          <circle cx="100" cy="147" r="10" fill="white" />
          <circle cx="140" cy="147" r="10" fill="white" />
        </svg>
        <div className="mt-4 text-[0.8125rem] text-[#4E5969]">Backup Storage</div>
      </Panel>
    </Card>
  );
}

/* Main Layout */
export default function KeyBenefits() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:px-12 md:py-24">
      <div className="mx-auto flex w-full max-w-[61.75rem] flex-col gap-8 md:gap-[5rem]">
        {/* Header block */}
        <div className="flex flex-col gap-4 md:gap-[1.75rem]">
          <h2
            className="text-[1.5rem] md:text-[2.5rem]"
            style={{
              color: COLORS.navy,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              lineHeight: "130%",
              letterSpacing: "0rem",
            }}
          >
            Key Benefits
          </h2>
          <p
            className="w-full text-[0.875rem] md:w-[42.25rem] md:max-w-full md:text-[1.125rem]"
            style={{
              color: COLORS.bodyText,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              lineHeight: "155%",
              letterSpacing: "0rem",
            }}
          >
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:w-full md:grid-cols-2 md:gap-x-[3.25rem] md:gap-y-[4.625rem]">
          <UpToDateInformation />
          <DataAnalysis />
          <EasyEffectiveManagement />
          <CostEffective />
          <Security />
          <DataBackup />
        </div>
      </div>
    </section>
  );
}
