export default function About () {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <img src="/image-about-dark.jpg" alt="" className="w-full h-full"/>
        <div className="py-10 px-10">
          <h2 className="uppercase tracking-[4px] font-700 text-base/6 mb-3">
            about our furniture
          </h2>
          <p className="text-custom-grey-500 font-500 text-sm/5">
            {" "}
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img src="/image-about-light.jpg" alt="" className="w-full h-full"/>
      </section>
    );
}