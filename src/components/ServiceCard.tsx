interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition duration-300">
      <div className="h-40 bg-slate-200 rounded-xl mb-4 flex items-center justify-center text-slate-400">
        Imagen
      </div>

      <h3 className="text-xl font-bold text-teal-600 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
