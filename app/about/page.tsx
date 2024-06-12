export default function about() {
  return (
    <div className="bg-slate-900">
      <div className="flex h-screen bg-slate-900 mx-auto max-w-[1280px]">
        <div className="w-1/2 bg-blue-500">tsetser</div>
        <div className="w-1/2 bg-green-500 overflow-y-scroll">
          <div className="h-96 bg-green-600 mt-4"></div>
          <div className="h-96 bg-green-700 mt-4"></div>
          <div className="h-96 bg-green-800 mt-4"></div>
          <div className="h-96 bg-green-900 mt-4"></div>
        </div>
      </div>
    </div>
    // <div className="flex h-screen">
    //   <div className="w-1/2 bg-blue-500 p-4">
    //     <div className="text-3xl text-white">Static Content</div>
    //     <p className="text-white mt-4">This content does not scroll.</p>
    //   </div>
    //   <div className="w-1/2 bg-green-500 p-4 overflow-y-scroll">
    //     <h1 className="text-white text-3xl">Scrollable Content</h1>
    //     <p className="text-white mt-4">This content is scrollable.</p>
    //     <div className="h-96 bg-green-600 mt-4"></div>
    //     <div className="h-96 bg-green-700 mt-4"></div>
    //     <div className="h-96 bg-green-800 mt-4"></div>
    //     <div className="h-96 bg-green-900 mt-4"></div>
    //   </div>
    // </div>
  );
}
