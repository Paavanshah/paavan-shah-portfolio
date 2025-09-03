export const Section = ({ id, title, children, className }) => {
    return (
      // The border has been removed from here.
      <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-theme-text-primary mb-12">
            {title}
          </h2>
          {children}
        </div>
      </section>
    );
  };