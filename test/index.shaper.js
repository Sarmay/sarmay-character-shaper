const expect = require('chai').expect
const shaper = require('../index.js')

const strKz1 = `ءبىلىم، ءبىلىم قازاقسوفت قازاق جازۋلارىن سايكەستىرۋ-ولشەمدەندىرۋ سيستەماسى. ءبىلىم، ءوزارا ۇيرەنۋ.كىتاپ`
const strKz2 = `
ءبىلىم العان جاقسى عوي. قالارمەكەن الالالا بالا قايسىلارى كىتاپ — ءبىلىم بۇلاعى
ھارمان
`

describe('Test shaper =>', () => {
  it('shaper', function () {
    expect(shaper(strKz1)).to.be.equal(`ﭖﺎﺘﯩﻛ.ﯟﻧﻩﺮﻳﯗ ﺍﺭﺍﺯﻭﺀ ،ﻢﯩﻠﯩﺑﺀ .ﻰﺳﺎﻣﻪﺘﺴﻴﺳ ﯞﺮﯨﺪﻧﻩﺪﻣﻪﺸﻟﻭ-ﯞﺮﯩﺘﺳﻪﻜﻳﺎﺳ ﻦﯨﺭﻻﯞﺯﺎﺟ ﻕﺍﺯﺎﻗ ﺖﻓﻮﺴﻗﺍﺯﺎﻗ ﻢﯩﻠﯩﺑﺀ ،ﻢﯩﻠﯩﺑﺀ`)
  })
  it('shaper 2', function () {
    expect(shaper(strKz2)).to.be.equal(`ﻰﻋﻻﯘﺑ ﻢﯩﻠﯩﺑﺀ — ﭖﺎﺘﯩﻛ ﻯﺭﻼﯩﺴﻳﺎﻗ ﻻﺎﺑ ﻻﻻﻻﺍ ﻥﻪﻛﻪﻣﺭﻻﺎﻗ .ﻱﻮﻋ ﻰﺴﻗﺎﺟ ﻥﺎﻌﻟﺍ ﻢﯩﻠﯩﺑﺀ
ﻥﺎﻣﺭﺎﮬ`)
  })
})
