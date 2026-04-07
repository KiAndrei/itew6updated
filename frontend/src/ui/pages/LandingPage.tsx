import { Link } from "react-router-dom";

function Feature({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="lp-card lp-feature">
      <div className="lp-feature-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <div className="lp-feature-title">{title}</div>
        <div className="lp-feature-desc">{desc}</div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const accent = "all in one place";
  return (
    <div className="lp">
      <header className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-brand">
            <img className="lp-brand-logo" src="/logo.png" alt="CCS logo" />
            <div className="lp-brand-text">
              <div className="lp-brand-name">College of Computing Studies</div>
              <div className="lp-brand-sub">Student Profiling System</div>
            </div>
          </div>

          <div className="lp-nav-actions">
            <a className="lp-nav-link" href="#features">
              Features
            </a>
            <Link className="lp-btn lp-btn--ghost" to="/login">
              Log in
            </Link>
            <Link className="lp-btn lp-btn--primary" to="/login">
              Open portal
            </Link>
          </div>
        </div>
      </header>

      <main className="lp-main">
        <section className="lp-hero">
          <div className="lp-hero-inner">
            <div className="lp-hero-content">
              <h1 className="lp-title">
                Your CCS profile,{" "}
                <span className="lp-title-accent" aria-label={accent}>
                  {accent.split("").map((ch, idx) => (
                    <span
                      key={`${ch}-${idx}`}
                      className={ch === " " ? "lp-shine-space" : "lp-shine-char"}
                      style={{ ["--d" as any]: `${idx * 45}ms` }}
                      aria-hidden="true"
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  ))}
                </span>
                .
              </h1>
              <p className="lp-subtitle">
                View your subjects, schedule, grades, skills, and event
                participation—plus keep your profile details updated in a clean
                and modern student portal.
              </p>

              <div className="lp-hero-cta">
                <Link className="lp-btn lp-btn--primary lp-btn--lg" to="/login">
                  Log in to your portal
                </Link>
                <a className="lp-btn lp-btn--ghost lp-btn--lg" href="#features">
                  Explore features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-section" id="features">
          <div className="lp-section-head">
            <div className="lp-section-kicker">Features</div>
            <h2 className="lp-h2">What students can do</h2>
            <p className="lp-p">
              A student-first portal for viewing your records and staying on
              top of your academic progress.
            </p>
          </div>

          <div className="lp-grid-3">
            <Feature
              icon="▣"
              title="Profile overview"
              desc="See your course, section, year level, and contact details in one place."
            />
            <Feature
              icon="✦"
              title="Subjects"
              desc="View enrolled subjects and important academic information."
            />
            <Feature
              icon="⏱"
              title="Schedule"
              desc="Check class timing and stay updated with your schedule."
            />
            <Feature
              icon="⬚"
              title="Grades"
              desc="Track your grades and performance history over time."
            />
            <Feature
              icon="◷"
              title="Events"
              desc="See event participation and achievements recorded in your profile."
            />
            <Feature
              icon="▦"
              title="Skills"
              desc="Review recorded skills and proficiency levels as part of your profile."
            />
          </div>
        </section>

        <section className="lp-section lp-section--alt" aria-label="Highlights">
          <div className="lp-two">
            <div className="lp-card lp-panel">
              <div className="lp-panel-head">
                <div className="lp-panel-title">Designed for students</div>
                <div className="lp-panel-sub">
                  Clear, modern, and easy to navigate
                </div>
              </div>
              <div className="lp-panel-body">
                <div className="lp-chip-row">
                  <span className="lp-chip">Profile</span>
                  <span className="lp-chip">Subjects</span>
                  <span className="lp-chip">Schedule</span>
                  <span className="lp-chip">Grades</span>
                  <span className="lp-chip">Events</span>
                  <span className="lp-chip">Skills</span>
                </div>
                <div className="lp-divider" />
                <div className="lp-note">
                  <div className="lp-note-title">Keep it updated</div>
                  <div className="lp-note-desc">
                    Update your profile photo and contact details anytime.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="lp-section-kicker">Portal</div>
              <h2 className="lp-h2">Built to be simple and fast</h2>
              <p className="lp-p">
                Everything is organized into clear pages so you can quickly
                check what matters: grades, schedule, subjects, skills, and
                your profile.
              </p>

              <div className="lp-inline-cta" style={{ marginTop: 16 }}>
                <Link className="lp-btn lp-btn--primary" to="/login">
                  Log in now
                </Link>
                <span className="lp-muted">Access the student portal.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-cta">
          <div className="lp-cta-inner">
            <div>
              <div className="lp-cta-title">Ready to open the portal?</div>
              <div className="lp-cta-desc">
                Sign in with your role to access dashboards and profiles.
              </div>
            </div>
            <Link className="lp-btn lp-btn--primary lp-btn--lg" to="/login">
              Continue to login
            </Link>
          </div>
        </section>

        <footer className="lp-footer">
          <div className="lp-footer-inner">
            <div className="lp-footer-brand">
              <img className="lp-footer-logo" src="/logo.png" alt="CCS logo" />
              <div className="lp-footer-brand-text">
                <div className="lp-footer-name">College of Computing Studies</div>
                <div className="lp-footer-sub">Student Profiling System</div>
                <div className="lp-footer-desc">
                  A centralized student portal for viewing profile details,
                  subjects, schedule, grades, skills, and event participation.
                </div>
              </div>
            </div>

            <div className="lp-footer-columns">
              <div className="lp-footer-col">
                <div className="lp-footer-col-title">Portal</div>
                <div className="lp-footer-col-links">
                  <Link className="lp-footer-link" to="/login">
                    Login
                  </Link>
                  <a className="lp-footer-link" href="#features">
                    Features
                  </a>
                </div>
              </div>
              <div className="lp-footer-col">
                <div className="lp-footer-col-title">System</div>
                <div className="lp-footer-col-links">
                  <a className="lp-footer-link" href="#features">
                    Student features
                  </a>
                  <a className="lp-footer-link" href="#features">
                    Profile overview
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lp-footer-bottom">
            <div className="lp-footer-bottom-inner">
              <div>© {new Date().getFullYear()} College of Computing Studies</div>
              <div className="lp-footer-bottom-right">
                <span className="lp-footer-dot" aria-hidden="true" />
                <span>University of Cabuyao</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

