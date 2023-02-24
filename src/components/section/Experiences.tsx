"use client";
import Card from "@/components/ui/Cards/Card";
import Text from "@/components/ui/Text/Text";
const Experiences: React.FC = () => {
	return (
		<>
			<Text type="h2" size="xl" spaceBottom>
				Quelques projets réalisés
			</Text>
			<div className="grid">
				<div className="grid-col md:size-1/2 lg:size-1/3">
					<Card
						title="Application de recherche d'emploi dans l'IT"
						content="Développement du front-end d'une application de recherche d'emploi avec diverses connexion à un backoffice alimenter par les candidats ou les entreprise. Moteur de recherche, création d'alerte, mis en favoris des offres..."
						img="/skills/next.svg"
						tags={"React, NextJS, TailwindCSS, TypeScript, GraphQL, Apollo"}
					/>
				</div>
				<div className="grid-col md:size-1/2 lg:size-1/3">
					<Card
						title="Moteur de réservation services opticiens"
						content="Développement d'une extension Wordpress pour la gestion de résérvation de services optiques. Planning par défaut en back et formulaire de réservation en front avec gestion des disponibilités."
						img="/skills/react.svg"
						tags={"React, Wordpress, php, SQL, GraphQL"}
					/>
				</div>
				<div className="grid-col md:size-1/2 lg:size-1/3">
					<Card
						title="Convertisseur de devise"
						content="Développement d'un convertisseur de devises basé sur des taux personnalisés paramétrable via les produits Woocommerce. Possibilité d'achat des devises en ligne après conversion. Formulaire en plusieurs étapes avec gestion du contexte."
						img="/skills/react.svg"
						tags={"React, php, Wordpress,Woocommerce, SQL, GraphQL"}
					/>
				</div>
			</div>
		</>
	);
};

export default Experiences;
