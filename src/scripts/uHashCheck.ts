/**
 * 
 * @param UUID The Page ID that is being looked for.
 * @param SLUG The primary Page Slug that is being looked for.
 * @param URL The URL to return for the Page that the user is looking for.
 */
function hashCheck1(UUID: string, SLUG: string, URL: string) {
  let hash = location.hash;
  let uuid = hash.replace("#", "");
  let slug = hash.toLocaleLowerCase().replace("#", "");

  if(uuid === UUID || slug === SLUG) {
    location.replace(URL);
  }
}

/**
 * 
 * @param UUID The Page ID that is being looked for.
 * @param SLUG The primary Page Slug that is being looked for.
 * @param SLUG2 The secondary Page Slug that is being looked for.
 * @param URL The URL to return for the Page that the user is looking for.
 */
function hashCheck2(UUID: string, SLUG: string, SLUG2: string, URL: string) {
  let hash = location.hash;
  let uuid = hash.replace("#", "");
  let slug = hash.toLocaleLowerCase().replace("#", "");

  if(uuid === UUID || slug === SLUG || slug === SLUG2) {
    location.replace(URL);
  }
}

/**
 * 
 * @param UUID The Page ID that is being looked for.
 * @param SLUG The primary Page Slug that is being looked for.
 * @param SLUG2 The secondary Page Slug that is being looked for.
 * @param SLUG3 The tertiary Page Slug that is being looked for.
 * @param URL The URL to return for the Page that the user is looking for.
 */
function hashCheck3(UUID: string, SLUG: string, SLUG2: string, SLUG3: string, URL: string) {
  let hash = location.hash;
  let uuid = hash.replace("#", "");
  let slug = hash.toLocaleLowerCase().replace("#", "");

  if(uuid === UUID || slug === SLUG || slug === SLUG2 || slug === SLUG3) {
    location.replace(URL);
  }
}

/**
 * 
 * @param UUID The Page ID that is being looked for.
 * @param SLUG The primary Page Slug that is being looked for.
 * @param SLUG2 The secondary Page Slug that is being looked for.
 * @param SLUG3 The tertiary Page Slug that is being looked for.
 * @param SLUG4 The quaternary Page Slug that is being looked for.
 * @param SLUG5 The quinary Page Slug that is being looked for.
 * @param SLUG6 The senary Page Slug that is being looked for.
 * @param URL The URL to return for the Page that the user is looking for.
 */
function hashCheck6(UUID: string, SLUG: string, SLUG2: string, SLUG3: string, SLUG4: string, SLUG5: string, SLUG6: string, URL: string) {
  let hash = location.hash;
  let uuid = hash.replace("#", "");
  let slug = hash.toLocaleLowerCase().replace("#", "");

  if(uuid === UUID || slug === SLUG || slug === SLUG2 || slug === SLUG3 || slug === SLUG4 || slug === SLUG5 || slug === SLUG6) {
    location.replace(URL);
  }
}

export { hashCheck1, hashCheck2, hashCheck3, hashCheck6 }
