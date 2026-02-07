import { FC } from 'react';
import { SignageExample } from './components/SignageExample';
import { Card, CardHeader, CardTitle, CardContent } from '@tsa/shadcnui';

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
        className="min-h-screen bg-slate-900 text-white p-12"
        data-testid="restaurant-menu"
      >
        <header className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4">Today's Menu</h1>
          <p className="text-3xl text-slate-300">Fresh. Local. Delicious.</p>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(menuCategories).map(([category, items]) => (
            <Card key={category} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-amber-400">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {items.map((item: MenuItem) => (
                    <div
                      key={item.name}
                      className="border-b border-slate-700 pb-4 last:border-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-semibold text-white">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-bold text-amber-400">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-lg text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="text-center mt-12">
          <p className="text-xl text-slate-400">
            Ask your server about daily specials and dietary options
          </p>
        </footer>
      </div>
    </SignageExample>
  );
};
