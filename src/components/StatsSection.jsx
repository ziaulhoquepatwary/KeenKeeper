import { AlertCircle, CheckCircle, MessageSquare, Users } from 'lucide-react';

function StatsSection() {
    const stats = [
        {
            label: 'Total Friends',
            value: '42',
            icon: <Users className="text-blue-500" size={24} />,
            description: 'Connected in your circle'
        },
        {
            label: 'On Track',
            value: '28',
            icon: <CheckCircle className="text-emerald-500" size={24} />,
            description: 'Healthy interaction frequency'
        },
        {
            label: 'Need Attention',
            value: '05',
            icon: <AlertCircle className="text-amber-500" size={24} />,
            description: 'Long time since last chat'
        },
        {
            label: 'Interactions',
            value: '124',
            icon: <MessageSquare className="text-purple-500" size={24} />,
            description: 'Messages & meets this month'
        }
    ];


    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-[#86efac] transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-4xl font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">
                                    {stat.value}
                                </span>
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-900 font-semibold text-lg">{stat.label}</p>
                                <p className="text-gray-400 text-sm mt-1">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection