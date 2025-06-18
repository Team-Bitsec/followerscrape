// components/SectionWrapper.jsx

export default function SectionWrapper({ children, className = "bg-white ", grid = false }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {grid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
