import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offerType';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferType[],
  isMain: boolean
}

function OffersList({offers, isMain}: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<OfferType | null>(null);
  const handleActiveSelectOffer = (offer: OfferType): void => {
    setActiveCard(offer);
  };
  const handleNotActiveSelectOffer = (): void => {
    setActiveCard(null);
  };
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          isMain={isMain}
          onCardSelect={handleActiveSelectOffer}
          onCardNotSelect={handleNotActiveSelectOffer}
        />
      ))}
    </>
  );
}

export default OffersList;
