function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-12 text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold">Bogdan Kholmikangas</h1>
        <div class='bs'><p className="text-xl text-gray-400 typewriter front-text">Front-end Developer & UX/UI Enthusiast</p></div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-4" data-aos="fade-up">
        <div className="block-gray-400">
          <h2 className="text-3xl font-semibold mb-6">About me</h2>
          <p className="text-lg text-gray-300">
            Hi! I am Bogdan Holmikangas, a Front-end developer who is passionate about creating modern and intuitive web interfaces. I'm studying the technology stack of HTML, CSS, JavaScript, React, and Node.js, using AI to more effectively search for the necessary information and low-code applications, to build templates and further adjust them for training purposes. I also immerse myself in the world of UX/UI design in order to create products that delight users with their functionality and aesthetics.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-16 px-4" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-semibold mb-6 text-center my-skill">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
            { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
            { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
            { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
            { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
            { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
            { name: 'Windsurf', icon: 'https://i.postimg.cc/FRDtpd3n/1737030207401-1.png' }, // Placeholder: Contact windsurf.com for official logo
            { name: 'Builder.io', icon: 'https://www.builder.io/favicon.ico' },
          ].map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 skill-icon" />
              <p className="mt-2 text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-semibold mb-6">Contact me</h2>
        <p className="text-lg text-gray-300">
          Do you want to discuss a project or just chat about technology? Write to me!
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://t.me/netrunner39"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <img 
              src='https://img.icons8.com/?size=100&id=63306&format=png&color=000000' 
              width='30px' 
              className="inline-block" 
            />
            Telegram
          </a>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/Klmnzki"
            className="github-button px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-6 h-6"
            />
            GitHub
          </a>
          <a
            href="https://discord.gg/qsQPgxfDYV"
            className="discord-button px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
              alt="Discord"
              className="w-6 h-6"
            />
            Discord
          </a>
        </div>
      </section>
    </div>
  );
}

// Проверка загрузки React и рендеринга
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
} catch (e) {
  console.error('React render error:', e);
}