import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const EventsSection = () => {
  const { t, language } = useLanguage();

  const events = [
    {
      date: "22",
      month: language === 'de' ? 'Dez' : language === 'sq' ? 'Dhj' : 'Dec',
      titleKey: 'events.lecture',
      descKey: 'events.lectureDesc',
      timeKey: 'events.lectureTime',
    },
    {
      date: "31",
      month: language === 'de' ? 'Dez' : language === 'sq' ? 'Dhj' : 'Dec',
      titleKey: 'events.yearEnd',
      descKey: 'events.yearEndDesc',
      time: "20:00",
    },
    {
      date: "15",
      month: language === 'de' ? 'Jan' : language === 'sq' ? 'Jan' : 'Jan',
      titleKey: 'events.youth',
      descKey: 'events.youthDesc',
      time: "17:00 - 19:00",
    },
  ];

  const announcements = [
    t('events.ann1'),
    t('events.ann2'),
    t('events.ann3'),
  ];

  return (
    <section id="events" className="section-padding">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              {t('events.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('events.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                {t('events.upcoming')}
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="card-elevated flex gap-5 group hover:shadow-gold transition-all duration-300"
                  >
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gold/10 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gold">
                        {event.date}
                      </span>
                      <span className="text-xs uppercase text-muted-foreground">
                        {event.month}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors">
                        {t(event.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t(event.descKey)}
                      </p>
                      <p className="text-sm font-medium text-gold">
                        {event.timeKey ? t(event.timeKey) : event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements Column */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                📢 {t('events.announcements')}
              </h3>
              <div className="card-elevated bg-gold/5 border border-gold/20">
                <ul className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold" />
                      <p className="text-muted-foreground">{announcement}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gold/20">
                  <Button variant="ghost" className="w-full justify-between group">
                    <span>{t('events.allAnnouncements')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
