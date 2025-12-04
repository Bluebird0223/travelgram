// src/data/images.ts or similar

export interface PostImage {
    id: number;
    alt: string;
    url: string;
    likes: number;
    // Bento Grid size properties:
    // Use col-span-2 or row-span-2 for larger items
    colSpan?: number;
    rowSpan?: number;
}

export interface SavedImage {
    id: number;
    alt: string;
    url: string;
    saved: number;
    colSpan?: number;
    rowSpan?: number;
}

export const postImages: PostImage[] = [
    // Large Featured Item (Spans 2 columns)
    { id: 1, alt: "A photo of a tropical beach in Bali at sunset", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBokp327nRuMLFbi9rYuKpoIbC8Gc02AgRubBoJ3Ok26hwx8ozCPcfevKks0nAKDX6EfdMehxa9JYzwAt5B5VeLOmux-lHC-uVO7wxirO9r3JP-Gmcn_ebg28D63wBUG-hgzCeg-TIlx3Dgnefl3WNjMeyowU-muLHw87wz4_hhum1N_w5p_xdSN2bueM1cJLs31CDnIIe92AP0tp_ueEOMmJiNE-badQvl0R8GEKwBuOnhlzrR5tqLJ1ItkpedPQQbjD4AVBJCcg8', likes: 1204, colSpan: 2 },

    // Medium Item
    { id: 2, alt: "A photo of ancient temples in Kyoto during cherry blossom season", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm4gRXbhkejgoWXXHYvpXI8OvqW8CFyyLovb5fjkqlvLyCtT8GJCAGI3VjmAZfc6hfya9BZ48WYwVKkX_HWi0wLucPkq4ufQL9DAuYgd-b5kgz0pMAdsZLl5qWVbJ79bNL2L5R9k-ghwugFEmDkka1XK27jO1-BC-GpoTxOu1at1iZc0VMCojNK4IvIaTJw_lvGqklLH8GZeO-GRNsn6ZxQKuCVEQp9AltQMmWdy4K5vZWmBqkjwpYjccfwPRtLDZeNsUfV4lEjHk', likes: 856 },

    // Medium Item
    { id: 3, alt: "A photo of the Eiffel Tower in Paris on a sunny day", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg_8FweOtX71rEzygksDC_YRwGFUZQH91DBey3HJl0y_SR23ui-MW4_7G5rgzX2gV3DCuI6OkKDFmY_5l95f3tWCrgMs0EehtsRec6bmPbtCVbQOlNb_EUxZ4vCnqWTVoyhRjNBndDYeFjErVMOcOqe4eUUCaUcObDUYzfQ4vM1DqpwYJa6xHJEjFKIRyX6bILmN2jel1v32SvHFB8UB-vleDJRx7tkU-2hGpnW9y2cil5Mg-DWZJr-gYZHKOj_FbeZDe_x7k99UU', likes: 2130 },

    // Tall Item (Spans 2 rows)
    { id: 4, alt: "A photo of the New York City skyline at dusk", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-_Och41kv_Qq_XqHABLIX8inKrFl-i293M2zKC4PqpNK4CtEcxE78lXVkvnuRHspV_-TwhvPEQ0oCNOQWTKlAlUC5VlnjgBIqBehHZspIFFgGLKaoYR9ds4Pq8qADLncDEespGVoQ-rXAKw13OXWBzVfXCECTaEbU0eYn4dqykV6I2KLm_2UwIYaA7sCa1ypKFCVmZS0TowTH-iqSGpJ7kdkTxckpKlpbEbqkIveLAznWDOoo9kJ5lNaap740dKTZhBl2rE7CBEI', likes: 987, rowSpan: 2 },

    // Small Item
    { id: 5, alt: "A photo of the Grand Canyon from a scenic viewpoint", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRIvdHRbvtwvA1gL6E4OQF_hES9jxCTlqqjTsH0Oq9HpfRaMp7Oln-jBQzV0VKvn3P80wJnjlkfnAcfPPdc1_nTiCSGVL2KoXZBjYZ59DXAWiE9DMfEigA6x5wQeITV5pRZEW0XwUxHkkxiwfrcADidPHWUjeCbWpCl4Lm8VurkEmWtVWRIiIbV529Rd5jYL_TF9mR6MXES_-w7iePG9EuIH8TM1y1_ogjgy8vAkmMHNH-Pbh52LTLXJTUr2QtDOlYAWpgAUdNiVc', likes: 1500 },

    // Small Item
    { id: 6, alt: "A photo of the Northern Lights in Iceland", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH2hoGNoyI64LkRYpfa3ScsMoyz2b25m1OpCz4typRkU3t3p-oOizpWxsq5MJ4QOraRuZ8GQHdVdVYgSZGNmTBF-c_JlfDp6Aed0PnAmwxVCdlKPHFmveqLuhLiUPalor1AlTclFYex8UL85-drpmfwb7TQgq-vIdODfrO4Xpn0SG2Ennj7iyOQ-wEU_OJyeTUFE73rbFAdRvH1XwZUdgk2ObE_Y4D6nR8jV2wiT3gxkqqc5sbcraHpopKJaRphw1m90mfeS-MtdE', likes: 754 },

    // Medium Item
    { id: 7, alt: "A colorful street market in Marrakech, Morocco", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFos1Zxp-oLIxxk9pY9UNa49AkhRNe4Et_XPlHhMKYv2nvMDdBSaQ0xyKTlo91j49Zo2sBD3g9AwCwLKjhWRlajo3JLY9iDMQPDJYVKNwTCSjXqIjf5fo36_Xzds4Q2f9D-SGGJfjGqWS901yYvEC1F_PDzbvb5FbR0TH91lItk7U45afC42sDp_vPoVLd-HZts35blgoqHH6uzbzOGXk452KXSMRpoWPpI1jxCFbOUaOUoBnrhA9W8eKOLUgM5IVahW3QAaqG07Q', likes: 1823 },

    // Small Item
    { id: 8, alt: "A stunning view of Machu Picchu in Peru", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW377jKD2Ug0tyxofBcB7B-tGNmATl_t3CgYLdPfreW8EaPJdiLViLDEuxUhQDQzX1s2ex-3-2t1EdK9OgUQXIkDt3BSxfgsqXMOS4ZBblEvP4C--q8QW917kbQqr2lKpEkErhTrRu1DdiXjjlh6UhvjK_2lcm5kPazFHsgwMj1SKPNKSOG_2xL12ZKdwa9B2ey03crs7N4J7raN8CRZGT7WX7XY8UgEdNrsPfyN7KNiBjuAOY5fuBlWA6x6bOLSfkcMUVDSUrYok', likes: 654 },

    // Small Item
    { id: 9, alt: "A gondola ride through the canals of Venice, Italy", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyvhDE8HKBfsX1fSfxQe1ptBv2TuBOCma2bF288mzq6-7VHlHG34XhepwHQC2idxy0sRHKwFMooAkU4VQ79gjyldjACH2MFWW6vTzJ4pFFBTl8U9os9QpP94kch7m2_3eFkFfawT5lalJia3lceF7whgvJsyYsLoZXrhAHrLRJczZWlBrVamg6ytksPuDXk78WBcL70l0b8mytP5-9YtEt10Tj897prgn8_AwHPDA4B0ulr2z0LLXKat49XgQK9kAjX6imYxO-92I', likes: 1198 },
];

export const savedImages: SavedImage[] = [
    { id: 10, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBRKq49Oxu_QjvteNKrEKG8xXEhdOaBCnLR8aQluNWEFd1Ftxn2GUWJvex9NB8VgUhdpuRmorQAfR_qsYjQh5iovprUhzxGqP_ToF4S3Oul01QDSWwvUwoL9jK-DndlZq5M-ayzvgx1O9qIPyXnexg_bNT_ylbzL0bBvL84InwxCBliODFnPNwiDf0U2jJ1HMM0Hp-Zt8HxZgMoqmuOvUsBwre-YigAoAX2bdLaTZbbU_Nn8Q9P0pWAcdkY-AFvjFX3DNchQ_xgzY', saved: 200, colSpan: 2 },
    { id: 11, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzQS9RrR2qrAQZRDoPvs_e0moUQHU306hfARCFYJprUceKDBeEk1J8Q0ULnqo5_UbQekKk5cwd2MTVEbrAX7jrkDBpKch-BX4vPQRnJa9M3zOVUrfw2FUesoie-cTI9q-pP8rpHwhDsIe0uqRgfiKom_mC5sRQWiBN7qU-J0utcZLA1FMNpSuHv2DwYIKF0Un6Twqo7wy_8u4KCyV04jh2i8Rvix8Rg27bkpvjYjjkMeuHV3qLaD3ngFzPfrX0c3mnaUGlLR5Ykw', saved: 2530 },
    { id: 12, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6elJMZoRsFNO_vOovX5wRJqdqIjuXHfGw8NWYCi5fxYIT2TCqL2Sb7Oqh5BncTX0bGBNRYlK7qA-6ZczLegjSARCDHkxXal9hf6G7kSnchkT8dmadpgVmdSFU_GVep_VQJ7HMESpJGK0ujd97faVBbFWmklkeCA4eipHgLiehV8SwOhf8fehRUoQLhn8X0xDYjq3SbxYwHJXkfRrQJ9IZGEYY9aK-qZPSLEHoH34DkGDVfVcbWEli-pE2Kf-lpA-LJhEf_AjWREU', saved: 156 },
    { id: 13, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4CXOWZCm0Ha9pvFn3NUFBzm2iil5pyB9ek9MqDbJ_2wXDRD948F_u-IQFcLIRi5P6yj-O9dqgwtm0fBis2IRqmrfH2hKqmsbtDgijwxJCCKQGELw_gwaYU9fBYbXHHMnLDRBXqpSVXHebcXVg7oXMGvFv9MfuXkV-O9C5U-xLQbD2rzO26FBCdM8NA3ZAMPavGvuzcUOthmMovZHVRI0kqltMxYcnHfOmk4IVJ0G24dS0SCfVfNUGNnwW8hWpuW7bx_poL3rlVI', saved: 9823, rowSpan: 2 },
    { id: 14, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw1ea2fzrseHRiQQLyqBB0-Onrk-7RUgGDFtw5AVDptndOShmngytMF-btnrAZgFyfgvDC8hzMkSy7zAzWWAtMAKvkIP8_4_OqCBtotjmEEhGN2N0zRB7Is2lc_d3lOu1stPRX1ZcpNCni2or7FhWrmXqYP-wOWI8oCa6SmCur9kDEvAH1n9WC211F0mgaDvdyreUuzbUG-uYnOE3BtNRrrUMnMqlcfCMDLMKMr7fkPDmG4bHv7rXsrl7AX8nuCh64JCMJZ_3PVl8', saved: 21 },
    { id: 15, alt: "Top-down view of a stunning turquoise beach with waves crashing on the shore", url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSq82rjb_wroB0cytz8EVavz8YtsMFM9RUxdexRrITi-4HXCHbpyd1rVKNShq6_hhKXzLXLPzZRiCcVDOVIdN9HEeMtufq4uvgi13z0et7NGmxei0kpOo90sYLngjeAbjNZb0c7MNMWCm9E85CSrIJ2OlfX5kZG8mzYj0A5N1hNZr_phS2kDCWOf1yImAoINSddvevpC8--t_3djzr9EoerR7Qxxd5zTOAi7RWL_w4RvDKUPY3v3BetYHPdWQkKEA44Xi7olbUqAA', saved: 6498 },
];