

const RestaurantCategory = (props) => {
    console.log('props', props);
    const { category } = props;
    const { title, itemCards } = category.card.card;
    return (
        <div className="w-[650px] bg-gray-100 p-12 mb-10 shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{title} ({itemCards.length})</h1>
                <span>⬇️</span>
            </div>
            {
                itemCards.map(item => {
                    const { name, defaultPrice, description, imageId } = item.card.info;
                    console.log('item', item);
                    return (
                        <div className="p-4">
                            <div>
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <p>Price: ₹ {defaultPrice}</p>
                            </div>
                            <div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantCategory;