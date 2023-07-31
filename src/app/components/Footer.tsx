export default function Footer() {
  return (
    <div>
      <footer className="flex h-[750px] w-full items-center  justify-evenly bg-footer ">
        <iframe
          title="googleMap"
          id="gmap_canvas"
          width="800px"
          height="400px"
          src="https://maps.google.com/maps?width=700&amp;height=350&amp;hl=en&amp;q=Belgrade, Kneza Milosa 17&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <div className="flex flex-col italic text-white">
          <p className="text-4xl font-bold tracking-wide underline">
            Contact info
          </p>
          <br />
          <br />
          <div className="text-3xl font-semibold">
            <div className="flex items-center">
              <p>06523213122</p>
            </div>
            <div className="flex items-center">
              <p>Beograd, Kneza Milosa 17</p>
            </div>
            <div className="flex items-center">
              <p>teoprof@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
