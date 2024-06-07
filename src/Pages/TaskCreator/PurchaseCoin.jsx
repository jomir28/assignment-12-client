import { Link } from "react-router-dom";


const PurchaseCoin = () => {
    const coinsData = [
        {coins:10,price:1},
        {coins:100,price:9},
        {coins:500,price:19},
        {coins:1000,price:39},
    ]
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-4xl font-semibold leading-tight"> Purchase Coins</h1>
                    <p className="px-4 sm:px-8 lg:px-24">Welcome to the Coin Purchase page! Choose from one of the packages below to buy coins and enhance your experience. Select the package that best suits your needs and proceed to a secure payment process powered by Stripe. Your coins will be credited to your account instantly upon successful payment.</p>
                    
                </div>
                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                    {
                        coinsData.map(data => <Link key={data.price} className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                                <p>{data.price} COINS</p>
                                <p className="text-5xl font-bold">{data.price}$</p>
                            </div>

                        </Link>)
}

                    {/* <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                        <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                           <p>10 COINS</p>
                            <p className="text-5xl font-bold">1$</p>
                        </div>
                      
                    </div>
                    <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                        <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                           <p>100 COINS</p>
                            <p className="text-5xl font-bold">9$</p>
                        </div>
                      
                    </div>
                    <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                        <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                           <p>500 COINS</p>
                            <p className="text-5xl font-bold">19$</p>
                        </div>
                      
                    </div>
                    <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                        <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                           <p>1000 COINS</p>
                            <p className="text-5xl font-bold">39$</p>
                        </div>
                      
                    </div> */}
                    
                    
                </div>
            </div>
        </section>
    );
};

export default PurchaseCoin;