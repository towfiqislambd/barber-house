const servicesData = [
    {
        id: 1,
        service: 'Haircut',
        thisMonth: 6,
        lastMonth: 0
    },
    {
        id: 2,
        service: 'Beard Trim',
        thisMonth: 4,
        lastMonth: 2
    },
    {
        id: 3,
        service: 'Hair Coloring',
        thisMonth: 3,
        lastMonth: 1
    },
    {
        id: 4,
        service: 'Facial',
        thisMonth: 5,
        lastMonth: 3
    },
    {
        id: 5,
        service: 'Shaving',
        thisMonth: 7,
        lastMonth: 5
    },
    {
        id: 6,
        service: 'Shaving',
        thisMonth: 7,
        lastMonth: 5
    }
];

const TopServices = () => {
    return (
        <div className='3xl:w-[750px] border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white shadow-md'>
            <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-6">Top Services</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="lg:text-lg text-gray-700">
                        <th className="text-left px-4 py-2">Service</th>
                        <th className="text-left px-4 py-2">This Month</th>
                        <th className="text-left px-4 py-2">Last Month</th>
                    </tr>
                </thead>
                <tbody>
                    {servicesData.map(data => (
                        <tr key={data.id} className="hover:bg-gray-100">
                            <td className="px-4 py-3">{data.service}</td>
                            <td className="px-4 py-3">{data.thisMonth}</td>
                            <td className="px-4 py-3">{data.lastMonth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopServices;
