const servicesData = [
    {
        id: 1,
        service: 'Mamunur Rahman Shihab',
        thisMonth: 150,
        lastMonth: 0
    },
    {
        id: 2,
        service: 'Waleedbinsalma',
        thisMonth: 4,
        lastMonth: 2
    },
    {
        id: 3,
        service: 'Md Mosharof',
        thisMonth: 3,
        lastMonth: 1
    },
    {
        id: 4,
        service: 'Shihab',
        thisMonth: 1500,
        lastMonth: 3
    }
];

const TopTeamMember = () => {
    return (
        <div className='3xl:w-[750px] w-full self-start border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white shadow-md'>
            <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-7">Top team member</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="lg:text-lg text-gray-700">
                        <th className="text-left px-2 md:px-4 py-2">Team member</th>
                        <th className="text-left px-2 md:px-4 py-2">This Month</th>
                        <th className="text-left px-2 md:px-4 py-2">Last Month</th>
                    </tr>
                </thead>
                <tbody>
                    {servicesData.map(data => (
                        <tr key={data.id} className="hover:bg-gray-100">
                            <td className="md:px-4 px-2 py-3">{data.service}</td>
                            <td className="md:px-4 px-2 py-3">{data.thisMonth}</td>
                            <td className="md:px-4 px-2 py-3">{data.lastMonth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopTeamMember;
