
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="logo">
          Maintenance<span>Hub</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="welcome" id="home">
        <p className="subtitle">MAINTENANCE MANAGEMENT SYSTEM</p>

        <h1>
          Manage maintenance
          <br />
          requests in one place.
        </h1>

        <p className="description">
          A simple platform for submitting, managing and tracking
          maintenance requests.
        </p>
      </section>

      <section className="features" id="features">
        <h2>What can you do?</h2>

        <div className="feature-list">
          <article className="feature-card">
            <h3>Submit Requests</h3>
            <p>
              Create maintenance requests and provide details about
              the problems you encounter.
            </p>
          </article>

          <article className="feature-card">
            <h3>Track Progress</h3>
            <p>
              Follow the status of your requests and stay informed
              about their progress.
            </p>
          </article>

          <article className="feature-card">
            <h3>Manage Tasks</h3>
            <p>
              Technicians can organize requests and update their
              resolution status.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer" id="about">
        MaintenanceHub – Maintenance Request Management
      </footer>
    </main>
  )
}

export default App
