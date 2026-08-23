import { motion } from "framer-motion";

const COLORS = {
  navy: "#203684",
  ink: "#2B3674",
  sub: "#A3AED0",
  bodyText: "#475467",
  cardBg: "#F4F7FE",
  white: "#FFFFFF",
  bluePrimary: "#4318FF",
  blueLight: "#7090FF",
  blueSoft: "#A3AED0",
  border: "#E9EDF7",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Panel({ children, className = "" }) {
  return (
    <div
      className={`min-h-[190px] rounded-[16px] bg-white p-6 shadow-[0px_18px_40px_rgba(112,144,176,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ title, description, children }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col justify-between transition-shadow duration-300"
      style={{
        backgroundColor: COLORS.cardBg,
        width: "450px",
        height: "396px",
        gap: "26.08px",
        borderRadius: "21.96px",
        paddingTop: "29.28px",
        paddingRight: "28px",
        paddingBottom: "29.28px",
        paddingLeft: "28px",
      }}
    >
      <div>
        <h3 className="mb-3 text-[22px] font-bold leading-snug" style={{ color: COLORS.ink }}>
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed" style={{ color: COLORS.bodyText }}>
          {description}
        </p>
      </div>
      <div>{children}</div>
    </motion.div>
  );
}

/* 1. Attendance Mini Bars */
function AttendanceMiniBars({ heights }) {
  return (
    <div className="flex items-end gap-1.5 h-12">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-3.5 rounded-t-sm"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}px` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          style={{
            background: "linear-gradient(180deg, #6AD2FF 0%, #3965FF 100%)",
          }}
        />
      ))}
    </div>
  );
}

function UpToDateInformation() {
  return (
    <Card
      title="Up to date Information"
      description="We take pride in collecting and analyzing complete and accurate data on students, staff, and parents."
    >
      <Panel>
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] font-medium text-[#A3AED0]">
            Last Synced: 2mins ago <span className="text-[9px]">▼</span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <div className="text-[12px] font-medium text-[#A3AED0] mb-1">Students Attendance</div>
            <div className="text-2xl font-bold mb-3 text-[#2B3674]">98%</div>
            <AttendanceMiniBars heights={[20, 32, 44]} />
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-medium text-[#A3AED0] mb-1">Staff Attendance</div>
            <div className="text-2xl font-bold mb-3 text-[#2B3674]">78%</div>
            <AttendanceMiniBars heights={[16, 28, 38]} />
          </div>
        </div>
      </Panel>
    </Card>
  );
}

/* 2. Data Analysis Bar Chart */
const CHART_DATA = [
  { label: "JSS1A", h: 30, hatched: false },
  { label: "JSS1C", h: 70, hatched: true },
  { label: "JSS1D", h: 30, hatched: false },
  { label: "JSS2A", h: 50, hatched: false },
  { label: "JSS2B", h: 20, hatched: false },
  { label: "JSS2C", h: 40, hatched: false },
  { label: "JSS2D", h: 25, hatched: true },
  { label: "JSS3A", h: 15, hatched: false },
  { label: "SSS2A", h: 100, hatched: false },
  { label: "SSS2B", h: 45, hatched: false },
  { label: "SSS2C", h: 30, hatched: true },
];

function DataAnalysis() {
  return (
    <Card
      title="Data Analysis"
      description="Schoolcube.net provides clear reports and data analysis through the use of tables and charts."
    >
      <Panel>
        <div className="flex items-center justify-between mb-4">
          <div className="text-[13px] font-bold text-[#2B3674]">2021/2022 Third Semester Students</div>
          <div className="flex gap-3 text-[11px] text-[#4318FF] font-medium">
            <span>Students ↗</span>
            <span>Staff ↗</span>
          </div>
        </div>
        <div className="flex items-end h-[110px]">
          <div className="flex flex-col justify-between text-right pr-2 pb-4 h-full w-6 text-[9px] text-[#A3AED0]">
            <span>250</span>
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
          <div className="flex items-end gap-1.5 flex-1 h-full">
            {CHART_DATA.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1 h-full justify-end">
                <motion.div
                  className="w-full rounded-t-[3px]"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${d.h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  style={{
                    background: d.hatched
                      ? `repeating-linear-gradient(135deg, #A3C9FF 0 2px, #E6EFFC 2px 5px)`
                      : "linear-gradient(180deg, #6AD2FF 0%, #3965FF 100%)",
                  }}
                />
                <div className="text-[8px] text-[#A3AED0]">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </Card>
  );
}

/* 3. System Uptime Radial Gauge */
function SystemUptimeGauge({ percent = 98, ticks = 36 }) {
  const cx = 140,
    cy = 120,
    rInner = 60,
    rOuter = 78;
  const filled = Math.round(ticks * (percent / 100));

  return (
    <svg width="100%" height="130" viewBox="0 0 280 130">
      {Array.from({ length: ticks }, (_, i) => {
        const angle = Math.PI - (i / (ticks - 1)) * Math.PI;
        const x1 = cx + rInner * Math.cos(angle);
        const y1 = cy - rInner * Math.sin(angle);
        const x2 = cx + rOuter * Math.cos(angle);
        const y2 = cy - rOuter * Math.sin(angle);
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={4.5}
            strokeLinecap="round"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: i * 0.015 }}
            stroke={i < filled ? "#4318FF" : "#E9EDF7"}
          />
        );
      })}
    </svg>
  );
}

function EasyEffectiveManagement() {
  return (
    <Card
      title="Easy & Effective Management"
      description="Schoolcube.net is intuitive, clear and easy to use. It provides 24/7 system stability and reliability."
    >
      <Panel className="text-center relative">
        <div className="text-[14px] font-bold text-[#2B3674] mb-1">System Uptime</div>
        <div className="flex justify-between text-[11px] text-[#A3AED0] px-2 mb-1">
          <span>Stability Score</span>
          <span>Reliability</span>
        </div>
        <SystemUptimeGauge percent={98} />
        <div className="text-2xl font-bold text-[#2B3674] -mt-8">98%</div>
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
    <svg width="130" height="130" viewBox="0 0 130 130">
      <circle cx="65" cy="65" r={r} fill="none" stroke="#E9EDF7" strokeWidth="12" />
      <motion.circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="#4318FF"
        strokeWidth="12"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        strokeLinecap="round"
        transform="rotate(-90 65 65)"
      />
      <text x="65" y="72" textAnchor="middle" fontSize="20" fontWeight="700" fill="#2B3674">
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
        <div className="flex items-center gap-2 text-[12px] text-[#A3AED0] mt-3">
          <span className="inline-block w-1 h-3 rounded-sm bg-[#4318FF]" />
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
        <svg width="80" height="96" viewBox="0 0 80 96" fill="none">
          <path
            d="M40 0L76 16V44C76 67.2 59.8 88.8 40 96C20.2 88.8 4 67.2 4 44V16L40 0Z"
            fill="url(#shield_grad)"
          />
          <path
            d="M40 0V96C20.2 88.8 4 67.2 4 44V16L40 0Z"
            fill="#FFFFFF"
            fillOpacity="0.2"
          />
          <line x1="40" y1="0" x2="40" y2="96" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="4" y1="40" x2="76" y2="40" stroke="#FFFFFF" strokeWidth="2" />
          <defs>
            <linearGradient id="shield_grad" x1="4" y1="0" x2="76" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6AD2FF" />
              <stop offset="1" stopColor="#3965FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="text-[13px] text-[#A3AED0] mt-4">Data Encryption</div>
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
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
          <path
            d="M24 38V26A16 16 0 0156 26V38"
            stroke="url(#lock_grad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <rect x="10" y="38" width="60" height="46" rx="12" fill="url(#lock_grad)" />
          <circle cx="30" cy="61" r="3.5" fill="#FFFFFF" />
          <circle cx="40" cy="61" r="3.5" fill="#FFFFFF" />
          <circle cx="50" cy="61" r="3.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="lock_grad" x1="10" y1="12" x2="70" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6AD2FF" />
              <stop offset="1" stopColor="#3965FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="text-[13px] text-[#A3AED0] mt-4">Backup Storage</div>
      </Panel>
    </Card>
  );
}

/* Main Layout */
export default function KeyBenefits() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div
        className="mx-auto flex flex-col"
        style={{ width: "988px", maxWidth: "100%", gap: "80px" }}
      >
        {/* Header block: 988 x 136, gap 28px */}
        <div className="flex flex-col" style={{ gap: "28px" }}>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              color: COLORS.navy,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "130%",
              letterSpacing: "0px",
            }}
          >
            Key Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              color: COLORS.bodyText,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "155%",
              letterSpacing: "0px",
              width: "676px",
              maxWidth: "100%",
            }}
          >
            Discover the advantages that help schools operate more efficiently,
            save time, and deliver a better learning experience.
          </motion.p>
        </div>

        {/* Cards container: 952 x 1336, row gap 74px, column gap 52px */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid"
          style={{
            width: "952px",
            maxWidth: "100%",
            gridTemplateColumns: "repeat(2, 450px)",
            justifyContent: "center",
            rowGap: "74px",
            columnGap: "52px",
          }}
        >
          <UpToDateInformation />
          <DataAnalysis />
          <EasyEffectiveManagement />
          <CostEffective />
          <Security />
          <DataBackup />
        </motion.div>
      </div>
    </section>
  );
}