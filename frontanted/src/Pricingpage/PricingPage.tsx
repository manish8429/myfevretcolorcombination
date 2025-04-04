import React from 'react';
import './PricingPage.css';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  isVIP?: boolean;
}

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => {
  return (
    <div className={`pricing-card ${tier.isVIP ? 'vip-card' : ''} ${tier.isPopular ? 'popular-card' : ''}`}>
      {/* VIP Crown Logo */}
      {tier.isVIP && <div className="vip-logo" />}

      {/* Popular badge */}
      {tier.isPopular && (
        <div className="popular-badge">
          <span className="star-icon" />
          MOST POPULAR
        </div>
      )}

      <h3 className={`pricing-tier-name ${tier.isVIP ? 'vip-name' : ''} ${tier.isPremium ? 'premium-name' : ''}`}>
        {tier.name}
      </h3>

      <div className="price-container">
        <span className={`price ${tier.isVIP ? 'vip-price' : ''} ${tier.isPopular ? 'popular-price' : ''}`}>
          {tier.price}
        </span>
        {tier.period && <span className="period">{tier.period}</span>}
      </div>

      <p className="description">{tier.description}</p>

      <ul className="features-list">
        {tier.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className={`check-icon ${tier.isVIP ? 'vip-check' : ''} ${tier.isPremium ? 'premium-check' : ''}`}>
              <span className="check-mark" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`cta-button ${tier.isVIP ? 'vip-button' : ''} ${tier.isPopular ? 'popular-button' : ''} ${tier.isPremium ? 'premium-button' : ''}`}
      >
        Get Started
      </button>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    // {
    //   name: 'Basic',
    //   price: '$9',
    //   period: '/month',
    //   description: 'Perfect for individuals getting started',
    //   features: [
    //     '10 projects included',
    //     '5GB storage space',
    //     'Basic analytics dashboard',
    //     'Email support with 48h response'
    //   ]
    // },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Best option for growing teams',
      features: [
        'Unlimited projects',
        '50GB storage space',
        'Advanced analytics reports',
        'Priority email & chat support',
        'Team collaboration tools'
      ],
      isPopular: true
    },
    {
      name: 'VIP',
      price: '$99',
      period: '/month',
      description: 'Premium solution for enterprises',
      features: [
        'Unlimited projects & teams',
        '1TB secure storage',
        'Advanced analytics + AI insights',
        '24/7 VIP dedicated support',
        'Personal account manager',
        'Full API access',
        'Custom integrations'
      ],
      isVIP: true,
      isPremium: true
    }
  ];

  return (
    <div className="pricing-container">
      {pricingTiers.map((tier, index) => (
        <PricingCard key={index} tier={tier} />
      ))}
    </div>
  );
};

export default PricingPage;