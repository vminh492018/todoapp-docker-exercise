export default function Header() {
    return (
        <header className="grid grid-cols-12 mb-5">
        <div className="col-span-12">
          <h1 className="text-3xl font-semibold w-full text-center mb-2">
            Let's add what you have to do!
          </h1>
        </div>
        <div className="col-span-12">
          <p className="text-base text-center mx-auto">
            Fill the input and click button or "Enter" to add a new task into
            the list.
            <br />
            To mark as completed, just click directly to the task
          </p>
        </div>
      </header>  
    );
}