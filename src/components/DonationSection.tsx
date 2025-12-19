import { Heart, Building, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const DonationSection = () => {
  const { t } = useLanguage();

  const donationPurposes = [
    {
      icon: Building,
      titleKey: 'donate.mosque',
      descKey: 'donate.mosqueDesc',
    },
    {
      icon: GraduationCap,
      titleKey: 'donate.programs',
      descKey: 'donate.programsDesc',
    },
    {
      icon: Users,
      titleKey: 'donate.social',
      descKey: 'donate.socialDesc',
    },
  ];

  return (
    <section id="donate" className="section-padding bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated border border-gold/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gold/5 p-8 text-center border-b border-gold/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {t('donate.title')}
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {t('donate.description')}
              </p>
            </div>

            {/* Donation Purposes */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {donationPurposes.map((purpose) => (
                  <div key={purpose.titleKey} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
                      <purpose.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t(purpose.titleKey)}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t(purpose.descKey)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bank Details */}
              <div className="bg-secondary rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  {t('donate.bankDetails')}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">{t('donate.accountHolder')}</p>
                    <p className="font-medium text-foreground">
                      Xhamia Shqiptare Diaspora e.V.
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{t('donate.bank')}</p>
                    <p className="font-medium text-foreground">Sparkasse Osnabrück</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IBAN:</p>
                    <p className="font-medium text-foreground">
                      DE89 3704 0044 0532 0130 00
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">BIC:</p>
                    <p className="font-medium text-foreground">COBADEFFXXX</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {t('donate.note')}
                </p>
                <Button variant="gold" size="lg">
                  <Heart className="w-5 h-5" />
                  {t('donate.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
