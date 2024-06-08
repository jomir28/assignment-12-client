import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Component/Loading";


const PurchaseCoin = () => {

    const axiosSecure = useAxiosSecure()

    const { data: coinsData, isLoading } = useQuery({
        queryKey: ['payment-offer'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/payment-offer')
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-4 mx-auto sm:p-10">
                <div className="mb-12 space-y-4 text-center">
                    <h1 className="text-4xl font-semibold leading-tight"> Purchase Coins</h1>
                    <p className="px-4 sm:px-8 lg:px-24">Welcome to the Coin Purchase page! Choose from one of the packages below to buy coins and enhance your experience. Select the package that best suits your needs and proceed to a secure payment process powered by Stripe. Your coins will be credited to your account instantly upon successful payment.</p>

                </div>
                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                    {
                        coinsData.map(data => <Link to={`/dashboard/payment/${data._id}`} key={data._id} className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-300">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-100">
                                <p>{data.coins} COINS</p>
                                <p className="text-5xl font-bold">{data.dollars}$</p>
                            </div>

                        </Link>)
                    }

                </div>
            </div>
        </section>
    );
};

export default PurchaseCoin;