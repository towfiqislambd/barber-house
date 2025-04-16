const activityData = [
    {
        id: 1,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'no-show',
    },
    {
        id: 2,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'booked',
    },
    {
        id: 3,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'confirmed',
    },
    {
        id: 4,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'arrived',
    },
    {
        id: 5,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'started',
    },
    {
        id: 6,
        date: '06',
        time: 'Thu, 6 Feb 2025 13:00',
        title: 'Blow Dry',
        desc: 'Walk-In, 35min with Wendy',
        status: 'canceled',
    }
]

const NextAppointments = () => {
    const statusColors = {
        'no-show': 'text-[#05D9A8]',
        'booked': 'text-[#5E22DD]',
        'confirmed': 'text-[#055AD9]',
        'arrived': 'text-[#36B37E]',
        'started': 'text-[#00C2CB]',
        'canceled': 'text-[#FF5630]'
    };

    return (
        <div className="3xl:w-[750px] border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white">
            <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-10">Today&apos;s next appointments</h3>
            <div className="space-y-7">
                {
                    activityData.map(data => <div key={data.id} className="md:flex justify-between items-center">
                        <div className="flex gap-3 md:gap-5 flex-grow items-center">
                            <div className="text-center">
                                <p className="text-2xl font-bold">{data.date}</p>
                                <p className="font-medium">Feb</p>
                            </div>
                            <div className="">
                                <div className="flex gap-5 items-center">
                                    <p className="text-sm md:text-base">{data.time}</p>
                                    <p className={`font-medium text-sm md:text-base uppercase ${statusColors[data.status] || ''}`}>
                                        {data.status}
                                    </p>
                                </div>
                                <h3 className="text-[#1E1E1E] text-lg font-semibold py-[2px]">{data.title}</h3>
                                <p className="font-medium text-[#2C2C2C]">{data.desc}</p>
                                <p className="text-[#1E1E1E] md:hidden font-semibold text-lg lg:text-xl">SAR 55</p>
                            </div>
                        </div>
                        <p className="text-[#1E1E1E] hidden md:block font-semibold text-lg lg:text-xl">SAR 55</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NextAppointments;