class UrlService{
    let id;
    let mapOfLongToShort; // {longUrl: shortUrl}
    let mapOfShortToLong; // {shortUrl: longUrl}
    
    constructor()
    {

    }
    addLongUrl(url)
    {
        if (mapOfLongToShort.Keys.Contains(url))
        {
            return;
        }

        // generate the short Url
        let shortUrl = generateShortUrl(url);
        mapOfLongToShort[url] = shortUrl;
        mapOfShortToLong[shortUrl] = url;
        id ++;
    }

    generateShortUrl(longUrl)
    {
        let nextId = id + 1;
        let newShortUrl = decodeInt(nextId);
        return newShortUrl;
    }

    decodeInt(value)
    {
        let chars = [0..9,a...z,A...Z];
        let res = [];
        while (value > 0);
        {
            let dec = value % 62;
            value = value / 62;
            res.push(0, chars[dec]);
        }

        return res.ToString();
    }

    removeLongUlr(url)
    {
        if (mapOfLongToShort.Keys.Contains(url))
        {
            return;
        }

        // get the short Url
        let shortUrl = longToShort(url);
        mapOfLongToShort[url] = undefined;
        mapOfShortToLong[shortUrl] = undefined;
    }

    longToShort(longUrl)
    {
        return  mapOfLongToShort[longUrl];
    }


    shortToLong(shortUrl)
    {
        return  mapOfShortToLong[shortUrl];
    }
}