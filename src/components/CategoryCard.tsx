
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

const CategoryCard = ({ title, description, icon, href, color }: CategoryCardProps) => {
  return (
    <Link to={href} className="block group">
      <div className={`bg-gradient-to-r ${color} p-px rounded-xl overflow-hidden`}>
        <div className="bg-background h-full rounded-[calc(0.75rem-1px)] p-6 transition-all hover:bg-accent/50">
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium text-primary">
            Перейти
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
