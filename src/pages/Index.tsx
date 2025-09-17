import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const services = [
    {
      title: 'Организация питания',
      description: 'Обеспечение качественным питанием логистических и строительных компаний',
      icon: 'UtensilsCrossed'
    },
    {
      title: 'Упаковка заказов',
      description: 'Сборка и упаковка продовольственных и non-food товаров',
      icon: 'Package'
    },
    {
      title: 'Химчистка спецодежды',
      description: 'Профессиональная химчистка рабочей одежды',
      icon: 'Shirt'
    }
  ];

  const menuWeek = [
    { day: 'Понедельник', dishes: ['Борщ украинский', 'Котлета по-киевски', 'Плов узбекский'] },
    { day: 'Вторник', dishes: ['Солянка мясная', 'Гуляш венгерский', 'Рыба запеченная'] },
    { day: 'Среда', dishes: ['Щи кислые', 'Бефстроганов', 'Курица в сливочном соусе'] },
    { day: 'Четверг', dishes: ['Харчо грузинский', 'Свинина тушеная', 'Треска под соусом'] },
    { day: 'Пятница', dishes: ['Борщ красный', 'Отбивная свиная', 'Судак жареный'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige via-white to-beige">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" size={32} className="text-primary" />
              <h1 className="text-3xl font-display font-bold text-primary">Ланч Холл</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-primary transition-colors">Меню на неделю</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-display font-bold text-gray-800 mb-6 animate-fade-in">
            Вкусно. Качественно. <span className="text-primary">Профессионально.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            15 лет опыта в сфере B2B питания. Обеспечиваем качественным питанием компании, 
            упаковываем заказы и предоставляем услуги химчистки спецодежды.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать питание
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
              <Icon name="Menu" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-gray-800 mb-4">Меню на неделю</h3>
            <p className="text-lg text-gray-600">Разнообразные и питательные блюда каждый день</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {menuWeek.map((day, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-lg">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {day.dishes.map((dish, dishIndex) => (
                      <li key={dishIndex} className="text-sm text-gray-700 flex items-start">
                        <Icon name="ChefHat" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-primary border-primary px-4 py-2">
              <Icon name="Clock" size={16} className="mr-2" />
              Меню обновляется еженедельно
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-r from-beige to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-gray-800 mb-4">Наши услуги</h3>
            <p className="text-lg text-gray-600">Комплексные решения для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-display font-bold text-gray-800 mb-6">О нашей компании</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания создана 15 лет назад и работает на рынке услуг B2B. 
                  Одним из направлений деятельности является обеспечение питанием компаний, 
                  оказывающих логистические услуги, складских центров и строительных компаний.
                </p>
                <p>
                  Другое направление – сборка и упаковка заказов собственными силами или с использованием аутстаффинга. 
                  Компания принимает заказы на сборку и упаковку как продовольственных товаров, так и товаров non-food. 
                  А также химчистка спецодежды.
                </p>
                <p>
                  Менеджмент и персонал компании обладает необходимым опытом и квалификацией для работы в этих областях. 
                  Имеющиеся оборудование и площади позволяет осуществлять приемку и хранения сырья для изготовления кулинарных блюд, 
                  а также приемку, временное хранение, сборку и упаковку товаров заказчиков.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Badge className="bg-primary text-white px-4 py-2">15 лет опыта</Badge>
                <Badge className="bg-secondary text-white px-4 py-2">B2B сегмент</Badge>
                <Badge className="bg-accent text-white px-4 py-2">Комплексные решения</Badge>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-center">Наши преимущества</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <span>Профессиональная команда</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <span>Современное оборудование</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <span>Гибкие условия сотрудничества</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <span>Качественное сырье</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-gradient-to-r from-white to-beige">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-gray-800 mb-4">Галерея наших блюд</h3>
            <p className="text-lg text-gray-600">Фотографии наших кулинарных шедевров</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/914a5949-061e-42dc-b50b-dac8884aeb59.jpg" 
                  alt="Горячее блюдо с мясом" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Горячее блюдо с мясом</h4>
                <p className="text-sm text-gray-600">Сочное мясо с овощами, приготовленное по авторскому рецепту</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/1c9191ac-d7c8-4a4a-a938-538fdad5070e.jpg" 
                  alt="Корпоративный обед" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Корпоративный обед</h4>
                <p className="text-sm text-gray-600">Разнообразный шведский стол для деловых мероприятий</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/76e2dbfb-fd5d-49b1-9968-04094b6a7cf6.jpg" 
                  alt="Борщ украинский" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Борщ украинский</h4>
                <p className="text-sm text-gray-600">Традиционный борщ с говядиной и сметаной</p>
              </CardContent>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="ImageIcon" size={48} className="text-primary/60 mx-auto mb-2" />
                    <p className="text-gray-500">Фото блюда {item}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Название блюда {item}</h4>
                  <p className="text-sm text-gray-600">Описание вкусного и аппетитного блюда</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-gray-800 mb-4">Контакты</h3>
            <p className="text-lg text-gray-600">Свяжитесь с нами для обсуждения сотрудничества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Ежедневно с 9:00 до 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@lunch-hall.ru</p>
                <p className="text-gray-600">Ответим в течение 2 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Москва, ул. Примерная, 123</p>
                <p className="text-gray-600">Офис и производство</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="ChefHat" size={24} className="text-primary" />
            <span className="text-xl font-display font-bold">Ланч Холл</span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 Ланч Холл. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Phone" size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Mail" size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Icon name="MapPin" size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;