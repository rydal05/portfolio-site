function ListModal({ title, text }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="flex gap-4">
                {text.map((item) => (
                    <div key={item.name} className="flex flex-col items-center">
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-10 h-10 bg-white rounded-xl"
                        />
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListModal;