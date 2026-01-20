<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:content="http://purl.org/rss/1.0/modules/content/" exclude-result-prefixes="content">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="/rss/styles.css" type="text/css" />
            </head>
            <body>
                <header>
                    <nav>
                        <a href="/pages">Home</a>
                        <a href="/rss.xml">RSS Home</a>
                        <a href="/misunderstood/rss.xml">Misunderstood</a>
                        <a href="/muses/rss.xml">Muses</a>
                        <a href="/rape-not-die/rss.xml">Fires</a>
                        <a href="/fig/rss.xml">Fig</a>
                        
                    </nav>
                </header>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    <xsl:for-each select="rss/channel/item">
                    <xsl:sort select="chapter" />
                    <tr>
                        <td><xsl:value-of select="title" /></td>
                        <td><xsl:value-of select="description" /></td>
                    </tr>
                    </xsl:for-each>
                </table>
                <div class="chapters">
                    <h1>
                        <xsl:value-of select="rss/channel/title" />
                    </h1>
                    <xsl:for-each select="rss/channel/item">
                        <div class="chapter">
                            <h2><xsl:value-of select="title" /></h2>
                            <p>Published on: <xsl:value-of select="pubDate"/></p>
                            <xsl:value-of select="content:encoded" disable-output-escaping="yes" />
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>