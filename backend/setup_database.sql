DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    composition TEXT,
    packaging VARCHAR(100),
    therapy_area VARCHAR(100),
    description TEXT,
    indications TEXT,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    image_url VARCHAR(500),
    title_line1 VARCHAR(100),
    title_highlight1 VARCHAR(100),
    title_line2 VARCHAR(100),
    title_highlight2 VARCHAR(100),
    stats1 VARCHAR(50),
    stats1_label VARCHAR(100),
    stats2 VARCHAR(50),
    stats2_label VARCHAR(100),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (
    product_code, name, tagline, composition, packaging, therapy_area, description, indications, price, stock_quantity, image_url, title_line1, title_highlight1, title_line2, title_highlight2, stats1, stats1_label, stats2, stats2_label
) VALUES 
(
    'KERA01', 'KERAJAKS HAIR SERUM', 'Advanced Hair & Scalp Restoration', 
    'Redensyl™ + Procapil™ + AnaGain™', '60 ml Bottle', 'Trichology',
    'Kerajaks is a formulation that is serum-based and enhanced by the potency of natural components. Its irritation-free solution, which has been rigorously tested on both men and women, encourages quick hair growth while nourishing the scalp. It strengthens hair from root to tip and tackles the primary causes of hair loss.',
    'Telogen Effluvium, Androgenetic alopecia, Re-densification of Hair on Scalp, Male pattern hair loss',
    1690.00, 150, '', 'Your Hair, ', 'Fortified', 'Root ', 'Restored', 'Active', 'Solutions', 'Doctor', 'Trusted'
),
(
    'FACIOXUV', 'FACIOX UV SUNSCREEN', 'Clinical Purity Protocols', 
    'Micronized Zinc Oxide, Micronized Titanium Dioxide, Caesalpinia Spinosa Fruit Pod Extract, Propylene Glycol, Helianthus Annuus (Sunflower) Sprout Extract, Sodium Hyaluronate, Vitamin C', '50 ml Bottle', 'Dermatology',
    'Faciox UV is a smart sunscreen that provides ultimate defence against harmful UV rays. Comprising Micronized Zinc Oxide, Micronized Titanium Dioxide, Caesalpinia Spinosa Fruit Pod Extract, Helianthus Annuus (Sunflower) Sprout Extract, Tocopheryl acetate and dimethicone crosspolymers, this silicone-based water-resistant formula with SPF 50 and PA+++ creates a breathable barrier on the skin while providing a hydrating effect and excellent spreadability properties.',
    'Anti-UV+ IR+ Blue Light, Anti-Pollution, Broad Spectrum Protection, Sunburn, SunTan, Premature Ageing',
    550.00, 120, '', 'Science ', 'Backed', 'Skin ', 'Approved', '100%', 'Science Led', '0%', 'Fillers Used'
),
(
    'FACIOXFW', 'FACIOX FACE WASH', 'Clinical Purity Protocols', 
    'Kojic Acid Dipalmitate, Alpha Arbutin, Niacinamide, Salicylic Acid, Vitamin C', '70 gm Tube', 'Dermatology',
    'Discover the secret to radiant, flawless skin with FACIOX Face Wash, a cutting-edge skincare solution formulated with a powerhouse blend. It comprises the skin-loving benefits of Kojic Acid Dipalmitate (for brightening and reducing dark spots), Alpha Arbutin (to fade discolorations), Niacinamide (for skin hydration and texture improvement), and Salicylic Acid (to exfoliate and unclog pores, keeping acne at bay).',
    'Uneven Skin Tone, Melasma, Acne, Hyperpigmentation, Skin Radiance, Oily skin',
    290.00, 200, '', 'Deeply ', 'Cleansed', 'Flawlessly ', 'Clear', '0', 'Stereotypes', 'ALL', 'Skin Tones'
),
(
    'EMOLUXOC', 'EMOLUX OC MOISTURIZER', 'Clinical Barrier Hydration', 
    'Ceramides, Sodium Hyaluronate, Lecithin', '50 ml Bottle', 'Dermatology',
    'Emolux OC is an oil control moisturizer with SPF 15 for oily and sensitive skin. Formulated with a harmonious trio of Ceramides (to retain moisture and fortify the protective barrier), Sodium Hyaluronate (renwoned for deep hydration and a plump look), and Lecithin (to regulate the skin''s oil production for a balanced, non-greasy feel), it offers an advanced gateway for achieving a perfectly balanced complexion.',
    'Uneven Skin Tone, Melasma, Acne, Hyperpigmentation, Skin Radiance, Oily skin',
    420.00, 180, '', 'Oil ', 'Controlled', 'Deeply ', 'Hydrated', '5G+', 'Bio Tech', '24/7', 'Skin Shield'
),
(
    'EMOLUXMOIST', 'EMOLUX MOIST MOISTURIZER', 'Luxurious Skin Hydration', 
    'Shea Butter, Mango Butter, Cocoa Butter, Avocado Butter, Sodium Hyaluronate', '50 ml Bottle', 'Dermatology',
    'Emolux Moist Moisturizer is a testament to the power of nature''s most sumptuous ingredients. This advanced skincare product is crafted with a rich blend of Shea Butter (for intensive nourishment), Mango Butter (packed with antioxidants and vitamins), Cocoa Butter (to assist skin elasticity and firmness), and Avocado Butter (packed with essential fatty acids for a natural glow). It offers an opulent skin pampering experience in intensive deep hydration and restoration.',
    'Xerosis, Dry Skin, Itchy Skin, Eczema, atopic skin',
    450.00, 140, '', 'Deep ', 'Restoration', 'Intense ', 'Hydration', '100%', 'Pure Butters', '24hr', 'Lock'
),
(
    'FACIOXSB', 'FACIOX SKIN BRIGHTENING SERUM', 'Advanced Pigmentation Science', 
    'Melanostatine™, Tyrostat™, ß-White™, Kojic acid, alpha arbutin, Niacinamide', '30 ml Bottle', 'Dermatology',
    'FACIOX Skin Brightening Serum is key to unlocking a luminous, even-toned complexion. Crafted with a potent blend of cutting-edge ingredients, including Melanostatine™ (to inhibit melanin production and reduce dark spots), Tyrostat™ (to regulate pigmentation), and ß-White™ (a skin-brightening superstar), this advanced serum transforms skin vitality and reveals natural radiance.',
    'Hyperpigmentation, uneven skin tone, Melasma, Skin Radiance, Photoageing, Post-inflammatory hyperpigmentation (PIH)',
    650.00, 110, '', 'Luminous ', 'Radiance', 'Flawless ', 'Tone', '3x', 'Active Act', '0', 'Dark Spots'
),
(
    'FACIOXHA', 'FACIOX HA SERUM', 'Deep Volumizing Hydration', 
    'Multimolecular Hyaluronic acid', '30 ml Bottle', 'Dermatology',
    'FACIOX HA Serum is your secret to achieving plump, hydrated, and radiant skin. Formulated with various molecular sizes of Hyaluronic Acid, it delivers moisture across multiple deep and structural layers of the skin, creating a long-lasting reservoir of hydration that leaves post-procedure or dry skin completely smooth, luminous, and supple.',
    'Wrinkles, Fine lines, Premature Ageing, Dry skin',
    590.00, 130, '', 'Deeply ', 'Plumped', 'Intensely ', 'Hydrated', 'Multi', 'Molecules', '100%', 'Pure HA'
),
(
    'EGLANCEEYE', 'EGLANCE UNDER EYE SERUM', 'Targeted Eye Restoration', 
    'ADIPOLESS™, Retinol, Caffeine, Squalene, Hyaluronic acid', '10 ml Bottle', 'Dermatology',
    'EGLANCE Under Eye Serum transforms tired, puffy under-eye areas into a radiant and rejuvenated masterpiece. It features ADIPOLESS™ (to reduce under-eye bags), Retinol (to refine skin texture and lines), Caffeine (for an instant pick-me-up by promoting micro-circulation), and Squalene (an effective hydrator maintaining moisture balance). It targets fine lines, crow''s feet, and morning eye fatigue gently and effectively.',
    'Dark circles, Crow’s feet and puffiness',
    480.00, 95, '', 'Tired Eyes, ', 'Revitalized', 'Dark Circles, ', 'Erased', 'Fast', 'Action', '10ml', 'Precision'
),
(
    'FACIOXVITC', 'FACIOX VITAMIN C SERUM', 'Antioxidant Radiance Engine', 
    '3-O-ethyl-ascorbic acid, Ascorbyl glucoside, Sodium Hyaluronate', '30 ml Bottle', 'Dermatology',
    'FACIOX Vitamin C Serum is your ticket to achieving a radiant and revitalized complexion. Formulated with a highly stable and potent combination of 3-O-Ethyl Ascorbic Acid and Ascorbyl Glucoside along with Sodium Hyaluronate, it targets skin firming, brightens dark spots, promotes a uniform skin tone, and builds an absolute defense against environmental stressors.',
    'Wrinkles, Hyperpigmentation, Premature Ageing, Crow''s Feet',
    620.00, 160, '', 'Pure ', 'Antioxidant', 'Radiant ', 'Glow', 'Stable', 'Vit C', '30ml', 'Pack'
),
(
    'NIGRINIL', 'NIGRINIL CREAM', 'Hyperpigmentation Correction', 
    'Retinol, Lactic Acid, Glycolic Acid, Urea, Sodium Hyaluronate', '100 gm Tube', 'Dermatology',
    'Nigrinil Cream is a powerful skincare innovation specifically crafted as a first-line approach to address the challenges of Acanthosis Nigricans while rejuvenating your skin. Blending Retinol (for cellular turnover), Lactic Acid & Glycolic Acid AHAs (to clear hyperkeratinization andDark patches), and Urea (for deep nourishment), it gently exfoliates and reduces velvety hyperpigmentation over sensitive friction areas.',
    'Hyperpigmentation Associated with Acanthosis Nigricans, Post-Inflammatory Hyperpigmentation (PIH)',
    350.00, 240, '', 'Dark Patches, ', 'Corrected', 'Skin Renewal, ', 'Accelerated', 'Dual', 'AHAs', '100g', 'Tube'
),
(
    'EMOLUXBAR', 'EMOLUX BODY BAR', 'Natural Nourishing Cleanse', 
    'Daucus Carota Sativa (Carrot) Seed Oil, Aloe Barbadensis Extract, Vitamin E, Chamomilla Recutita Flower Extract', '100 gm BAR', 'Dermatology',
    'Emolux Body Bar is a luxurious daily cleansing experience designed to pamper dry skin while harnessing nature. Combining Carrot Seed Oil (packed with vitamins for skin elasticity), Aloe Vera (to soothe and hydrate), Vitamin E (to fight free radicals), and Chamomile (for anti-inflammatory skin calming), it creates a deeply hydrating and refreshing body cleanse.',
    'For general body dryness, Sensitive or Irritated Skin profiles',
    180.00, 300, '', 'Naturally ', 'Nourished', 'Gentle ', 'Cleanse', 'Pure', 'Extracts', '100g', 'Bar'
),
(
    'LEVOJAKS', 'LEVOJAKS TABLETS', 'Systemic Anti-Allergy Care', 
    'Levocetrizine (5 mg / 10 mg)', '1 x 15 Tablets', 'Dermatology',
    'Levojaks is a systemic breakthrough anti-allergy formulation containing Levocetirizine in tablet form. Operating as a long-acting, non-sedating second-generation H1-receptor antagonist, it exhibits an elite efficacy and tolerability profile, swiftly alleviating prolonged pruritus and restoring skin tranquility from acute allergic manifestations triggered by drugs, food, or insect bites.',
    'Urticaria, Pruritus, Acute allergic reaction due to drug, food or insect bites & Acute Rhinitis',
    120.00, 500, '', 'Allergic Skin, ', 'Calmed', 'Fast-Track ', 'Relief', 'Long', 'Acting', '15', 'Tabs'
),
(
    'LEVOJAKSM', 'LEVOJAKS-M TABLETS', 'Synergistic Antihistamine Duo', 
    'Levocetrizine 5 mg + Montelukast 10 mg', '1 x 10 Tablets', 'Dermatology',
    'Levojaks M introduces a powerful dynamic duo combining Levocetirizine and Montelukast in an approved fixed-dose combination tablet. Highly effective for complex urticaria and allergic rhinitis resistant to standard monotherapy, it simultaneously blocks standard H1 receptors and cysteinyl leukotriene type-1 receptors (potent proinflammatory mediators) with an excellent safety profile.',
    'Urticaria, Pruritus, Acute allergic reaction due to drug, food or insect bites & Acute Rhinitis.',
    145.00, 450, '', 'Dynamic ', 'Duo', 'Allergy ', 'Defeated', 'FDA', 'Approved', '10', 'Tabs'
);
