interface Props {
  selectedIndex: number | null;
}

const EndPageInfoContainer = ({ selectedIndex }: Props) => {
  //TOPO: endpoint to fetch content from db
  const infoContent = [
    "Information about Service 1",
    "Information about Service 2",
    "Information about Service 3"
  ];

  return (
    <div className="text-center w-2/3 bg-black/50 px-6 py-4 rounded-lg">
      {selectedIndex !== null && <p>{infoContent[selectedIndex]}</p>}
    </div>
  );
};

export default EndPageInfoContainer;