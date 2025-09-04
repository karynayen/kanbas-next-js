import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3800" className="wd-dashboard-course-link">
            <Image src="/images/theory.webp" width={200} height={150} alt={""} />
            <div>
              <h5> CS3800 Theory of Computation</h5>
              <p className="wd-dashboard-course-title">
                Turing machines are fun!{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4400" className="wd-dashboard-course-link">
            <Image src="/images/pl.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS4400 Programming Languages</h5>
              <p className="wd-dashboard-course-title">
                Build the foundational blocks for cs languages!{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/fundies1.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS2500 Fundamentals of Computer Science 1</h5>
              <p className="wd-dashboard-course-title">
                Fundies 1{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2550" className="wd-dashboard-course-link">
            <Image src="/images/fundies2.webp" width={200} height={150} alt={""} />
            <div>
              <h5> CS2550 Fundamentals of Computer Science 2</h5>
              <p className="wd-dashboard-course-title">
                Fundies 2{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1800" className="wd-dashboard-course-link">
            <Image src="/images/discrete.webp" width={200} height={150} alt={""} />
            <div>
              <h5> CS1800 Discrete Structures</h5>
              <p className="wd-dashboard-course-title">
                Discrete Mathematics{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1345" className="wd-dashboard-course-link">
            <Image src="/images/scuba.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> PE1345 Scuba </h5>
              <p className="wd-dashboard-course-title">
                Under Water Adventures{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1001" className="wd-dashboard-course-link">
            <Image src="/images/math.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1001 Math Reasoning</h5>
              <p className="wd-dashboard-course-title">
                Understand the Principles of Math{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
