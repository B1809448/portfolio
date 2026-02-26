"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "RESTful API",
  "UI/UX",
];

const projects = [
  {
    title: "Portfolio cá nhân",
    description:
      "Trang portfolio hiện đại, tối ưu hiệu năng với Next.js, Tailwind CSS và Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Dashboard quản lý",
    description:
      "Bảng điều khiển trực quan giúp theo dõi dữ liệu theo thời gian thực.",
    tech: ["React", "TypeScript", "Chart.js"],
    link: "#",
  },
  {
    title: "Landing page sản phẩm",
    description:
      "Landing page tối ưu chuyển đổi với thiết kế tối giản, tập trung vào nội dung.",
    tech: ["Next.js", "Tailwind", "SEO"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-8 sm:pt-10 lg:px-12">
        {/* Navbar */}
        <header className="flex items-center justify-between pb-6 sm:pb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-zinc-100 to-zinc-400 text-xs font-semibold text-zinc-900 shadow-[0_0_40px_rgba(250,250,250,0.4)]">
              PT
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-tight">
                Tên của bạn
              </span>
              <span className="text-xs text-zinc-400">
                Frontend Developer · UI/UX
              </span>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex"
          >
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </motion.nav>
        </header>

        {/* Hero section */}
        <section className="flex flex-1 flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex-1 space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Đang tìm kiếm cơ hội freelance & full-time</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Xây dựng{" "}
                <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  trải nghiệm web
                </span>{" "}
                tinh tế & hiệu quả.
              </h1>
              <p className="max-w-xl text-pretty text-sm text-zinc-300 sm:text-base">
                Tôi là một Frontend Developer tập trung vào việc tạo ra giao
                diện hiện đại, mượt mà và dễ sử dụng với Next.js, React và
                Tailwind CSS. Tôi luôn chú trọng trải nghiệm người dùng và hiệu
                năng.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_0_40px_rgba(45,212,191,0.45)] transition hover:brightness-110"
              >
                Xem dự án
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                Liên hệ ngay
              </a>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full border border-zinc-800 bg-gradient-to-tr from-zinc-200 to-zinc-50" />
                  <div className="h-7 w-7 rounded-full border border-zinc-800 bg-gradient-to-tr from-sky-400 to-emerald-300" />
                  <div className="h-7 w-7 rounded-full border border-zinc-800 bg-gradient-to-tr from-zinc-700 to-zinc-500" />
                </div>
                <span>+3 năm kinh nghiệm thực chiến</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero side card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-1 justify-center lg:mt-0"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-sky-500 via-emerald-400 to-zinc-200 opacity-40 blur-xl" />
              <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur">
                <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
                  <span>Profile Overview</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300">
                    Available for work
                  </span>
                </div>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-zinc-50 via-zinc-200 to-zinc-400 text-lg font-semibold text-zinc-900">
                    PT
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-50">
                      Tên của bạn
                    </p>
                    <p className="text-xs text-zinc-400">
                      Frontend Developer · Việt Nam
                    </p>
                  </div>
                </div>
                <div className="mb-5 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-3">
                    <p className="text-[10px] text-zinc-400">Kinh nghiệm</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-50">
                      3+ năm
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-3">
                    <p className="text-[10px] text-zinc-400">Dự án</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-50">
                      12+
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-3">
                    <p className="text-[10px] text-zinc-400">Tập trung</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-50">
                      Frontend
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Stack chính
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[11px] text-zinc-200">
                      Next.js
                    </span>
                    <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[11px] text-zinc-200">
                      React
                    </span>
                    <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[11px] text-zinc-200">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[11px] text-zinc-200">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About + Skills */}
        <section
          id="about"
          className="mt-16 grid gap-10 border-t border-zinc-800/80 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Tập trung vào chi tiết, trải nghiệm và hiệu năng.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              Tôi có kinh nghiệm xây dựng sản phẩm cho startup và doanh nghiệp,
              từ landing page, hệ thống quản trị đến ứng dụng nội bộ. Tôi ưu
              tiên code sạch, dễ mở rộng và luôn cập nhật các công nghệ mới.
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              Ngoài lập trình, tôi còn quan tâm đến thiết kế và hành vi người
              dùng, giúp kết nối tốt hơn giữa business goal và trải nghiệm thực
              tế.
            </p>
          </motion.div>

          <motion.div
            id="skills"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Skills
            </p>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.7)]">
              <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
                <span>Kỹ năng chính</span>
                <span className="rounded-full bg-zinc-900 px-2 py-1 text-[10px] text-emerald-300">
                  Luôn học thêm mỗi ngày
                </span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={cardVariant}
                    className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-[11px] text-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mt-16 border-t border-zinc-800/80 pt-10"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Projects
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Một vài dự án tiêu biểu.
              </h2>
            </div>
            <p className="max-w-md text-xs text-zinc-400 sm:text-[13px]">
              Đây chỉ là một phần các dự án tôi đã thực hiện. Tôi có thể chia
              sẻ thêm chi tiết khi trao đổi.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={cardVariant}
                className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition hover:border-zinc-500/80 hover:shadow-[0_24px_80px_rgba(24,205,187,0.35)]"
              >
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zinc-50 sm:text-[15px]">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-[13px]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-[11px] text-zinc-400">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-900/80 px-2.5 py-1 text-[10px] text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-300 opacity-0 transition group-hover:opacity-100"
                  >
                    <span>Chi tiết</span>
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-16 border-t border-zinc-800/80 pt-10"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Contact
              </p>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Cùng xây dựng điều gì đó thú vị.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                Nếu bạn đang tìm kiếm một người có thể đồng hành phát triển sản
                phẩm từ ý tưởng đến triển khai, hãy liên hệ với tôi. Tôi sẵn
                sàng trao đổi qua email hoặc cuộc gọi nhanh.
              </p>
              <div className="space-y-2 text-sm text-zinc-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:youremail@example.com"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    youremail@example.com
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 underline-offset-4 hover:underline"
                  >
                    github.com/your-github
                  </a>
                </p>
              </div>
            </div>

            <form className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-zinc-200"
                >
                  Tên của bạn
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-zinc-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-zinc-200"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Mô tả ngắn về dự án hoặc yêu cầu của bạn..."
                  className="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-4 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_0_40px_rgba(34,211,238,0.5)] transition hover:brightness-110"
              >
                Gửi tin nhắn (demo)
              </button>
              <p className="text-[11px] text-zinc-500">
                Form này chỉ là minh hoạ giao diện. Bạn có thể tích hợp thực tế
                với dịch vụ gửi email (ví dụ: Formspree, Resend, v.v.).
              </p>
            </form>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-900 pt-6 text-[11px] text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Tên của bạn. All rights reserved.</p>
          <p className="flex gap-3">
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
