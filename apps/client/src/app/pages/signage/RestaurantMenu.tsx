import { FC } from 'react';
import { SignageExample } from './components/SignageExample';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuCategories = {
  Breakfast: [
    {
      name: 'Classic Breakfast',
      description: 'Eggs, bacon, toast, hash browns',
      price: '$12.99',
    },
    {
      name: 'Pancake Stack',
      description: 'Buttermilk pancakes with maple syrup',
      price: '$9.99',
    },
    {
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, cheese, peppers, onions',
      price: '$11.99',
    },
  ],
  'Lunch Specials': [
    {
      name: 'Club Sandwich',
      description: 'Turkey, bacon, lettuce, tomato, mayo',
      price: '$13.99',
    },
    {
      name: 'Caesar Salad',
      description: 'Romaine, parmesan, croutons, Caesar dressing',
      price: '$10.99',
    },
    {
      name: 'Soup & Sandwich Combo',
      description: 'Daily soup with half sandwich',
      price: '$12.99',
    },
  ],
  'Dinner Entrees': [
    {
      name: 'Grilled Salmon',
      description: 'Atlantic salmon with seasonal vegetables',
      price: '$24.99',
    },
    {
      name: 'Ribeye Steak',
      description: '12oz ribeye with mashed potatoes',
      price: '$32.99',
    },
    {
      name: 'Pasta Primavera',
      description: 'Fresh vegetables in garlic white wine sauce',
      price: '$18.99',
    },
  ],
};

export const RestaurantMenu: FC = () => {
  return (
    <SignageExample>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950 text-white p-16 relative overflow-hidden"
        data-testid="restaurant-menu"
      >
        {/* Ambient background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        
        <div className="relative z-10">
          <header className="text-center mb-16">
            <div className="inline-block mb-6 px-8 py-3 bg-teal-500/10 border border-teal-500/20 rounded-full">
              <p className="text-2xl text-teal-300 tracking-wide">DAILY SELECTION</p>
            </div>
            <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
              Today's Menu
            </h1>
            <p className="text-3xl text-slate-300 tracking-wide">Fresh. Local. Delicious.</p>
          </header>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(menuCategories).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
              >
                <div className="mb-8">
                  <h2 className="text-5xl font-bold text-teal-400 mb-2">
                    {category}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full" />
                </div>
                <div className="space-y-8">
                  {items.map((item: MenuItem) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-3xl font-semibold text-white group-hover:text-teal-300 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-3xl font-bold text-orange-400 ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xl text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-6" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <footer className="text-center mt-16 pt-8 border-t border-slate-800">
            <p className="text-2xl text-slate-400">
              Ask your server about daily specials and dietary options
            </p>
          </footer>
        </div>
      </div>
    </SignageExample>
  );
};
