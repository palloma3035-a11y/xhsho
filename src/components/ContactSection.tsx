import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'contact.address',
      value: "Musterstraße 123",
      subValue: "49074 Osnabrück, Deutschland",
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: "+49 541 123 4567",
    },
    {
      icon: MessageCircle,
      labelKey: 'WhatsApp',
      value: "+49 171 123 4567",
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: "info@xhamia-osnabrueck.de",
    },
    {
      icon: Clock,
      labelKey: 'contact.hours',
      value: t('contact.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              {t('contact.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t('contact.info')}
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.labelKey} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.labelKey === 'WhatsApp' ? 'WhatsApp' : t(item.labelKey)}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                      {item.subValue && (
                        <p className="text-sm text-muted-foreground">
                          {item.subValue}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button variant="gold" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://wa.me/491711234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('contact.whatsapp')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-elevated p-0 overflow-hidden">
              <div className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] bg-secondary relative">
                {/* Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.0!2d8.0498!3d52.2799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE2JzQ3LjYiTiA4wrAwMic1OS4zIkU!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort der Moschee"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay for styling */}
                <div className="absolute inset-0 pointer-events-none border-4 border-gold/10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
