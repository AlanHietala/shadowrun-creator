import * as attributeTypes from '../constants/attributeTypes'
import { strengthSelector,
  agilitySelector,
  willpowerSelector,
  magicSelector,
  bodySelector,
  reactionSelector,
  charismaSelector,
  intuitionSelector,
  logicSelector,
  essenceSelector,
  attributeSelector,
  resourcesSelector,
  characterSheetSelector} from './characterSelectors'
import * as modTypes from '../constants/modTypes'

describe('StrengthSelector', function () {
  it('should return the base strength + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          strength: {
            key: 'strength',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.STRENGTH_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(strengthSelector(state)).toEqual(selection)
  })

  it('should return the base strength if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          strength: {
            key: 'strength',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }

    expect(strengthSelector(state)).toEqual(selection)
  })

  it('should return the base strength + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          strength: {
            key: 'strength',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.STRENGTH_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.STRENGTH_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }

    expect(strengthSelector(state)).toEqual(selection)
  })

})

describe('AgilitySelector', function () {
  it('should return the base agility + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          agility: {
            key: 'agility',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.AGILITY_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(agilitySelector(state)).toEqual(selection)


  })

  it('should return the base agility if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          agility: {
            key: 'agility',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(agilitySelector(state)).toEqual(selection)


  })

  it('should return the base agility + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          agility: {
            key: 'strength',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.AGILITY_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.AGILITY_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(agilitySelector(state)).toEqual(selection)


  })

})

describe('WillpowerSelector', function () {
  it('should return the base willpower + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          willpower: {
            key: 'willpower',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.WILLPOWER_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(willpowerSelector(state)).toEqual(selection)


  })

  it('should return the base willpower if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          willpower: {
            key: 'willpower',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(willpowerSelector(state)).toEqual(selection)


  })

  it('should return the base willpower + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          willpower: {
            key: 'willpower',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.WILLPOWER_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.WILLPOWER_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(willpowerSelector(state)).toEqual(selection)


  })

})

describe('magicSelector', function () {
  it('should return the base magic + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          magic: {
            key: 'magic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.MAGIC_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
        weapons: [],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(magicSelector(state)).toEqual(selection)


  })

  it('should return the base magic if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          magic: {
            key: 'magic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(magicSelector(state)).toEqual(selection)


  })

  it('should return the base magic + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          magic: {
            key: 'magic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.MAGIC_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.MAGIC_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(magicSelector(state)).toEqual(selection)


  })

})

describe('bodySelector', function () {
  it('should return the base body + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          body: {
            key: 'body',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.BODY_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(bodySelector(state)).toEqual(selection)


  })

  it('should return the base body if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          body: {
            key: 'body',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(bodySelector(state)).toEqual(selection)


  })

  it('should return the base body + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          body: {
            key: 'body',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.BODY_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.BODY_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(bodySelector(state)).toEqual(selection)


  })

})

describe('reactionSelector', function () {
  it('should return the base reaction + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          reaction: {
            key: 'reaction',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(reactionSelector(state)).toEqual(selection)


  })

  it('should return the base reaction if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          reaction: {
            key: 'reaction',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.BODY_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(reactionSelector(state)).toEqual(selection)


  })

  it('should return the base reaction + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          reaction: {
            key: 'reaction',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(reactionSelector(state)).toEqual(selection)


  })

})

describe('charismaSelector', function () {
  it('should return the base charisma + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          charisma: {
            key: 'charisma',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.CHARISMA_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(charismaSelector(state)).toEqual(selection)


  })

  it('should return the base charisma if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          charisma: {
            key: 'charisma',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(charismaSelector(state)).toEqual(selection)


  })

  it('should return the base charisma + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          charisma: {
            key: 'charisma',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.CHARISMA_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.CHARISMA_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(charismaSelector(state)).toEqual(selection)


  })

})

describe('intuitionSelector', function () {
  it('should return the base intuition + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          intuition: {
            key: 'intuition',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.INTUITION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(intuitionSelector(state)).toEqual(selection)


  })

  it('should return the base intuition if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          intuition: {
            key: 'intuition',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(intuitionSelector(state)).toEqual(selection)


  })

  it('should return the base intuition + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          intuition: {
            key: 'intuition',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.INTUITION_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.INTUITION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(intuitionSelector(state)).toEqual(selection)


  })

})

describe('logicSelector', function () {
  it('should return the base logic + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          logic: {
            key: 'logic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.LOGIC_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(logicSelector(state)).toEqual(selection)


  })

  it('should return the base logic if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          logic: {
            key: 'logic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(logicSelector(state)).toEqual(selection)


  })

  it('should return the base logic + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          logic: {
            key: 'logic',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.LOGIC_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.LOGIC_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(logicSelector(state)).toEqual(selection)


  })

})

describe('essenceSelector', function () {
  it('should return the base essence + mod value if there is one mod', function () {
    const state = {
      character: {
        attributes: {
          essence: {
            key: 'essence',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.ESSENCE_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 2,
      computed: 6,
    }

    expect(essenceSelector(state)).toEqual(selection)


  })

  it('should return the base essence if there are no mods', function () {
    const state = {
      character: {
        attributes: {
          essence: {
            key: 'essence',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.REACTION_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 0,
      computed: 4,
    }


    expect(essenceSelector(state)).toEqual(selection)


  })

  it('should return the base essence + mod value if there multiple items with mods', function () {
    const state = {
      character: {
        attributes: {
          essence: {
            key: 'essence',
            minValue: 1,
            maxValue: 5,
            value: 4,
          },
        },
        items: [{
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.ESSENCE_MOD,
              effect: 2,
            },
          ],
        },
        {
          name: 'Reaction Enhancers 1',
          mods: [
            {
              modType: modTypes.ESSENCE_MOD,
              effect: 2,
            },
          ],
        }],
        ware:[],
      },
    }

    const selection = {
      base: 4,
      mods: 4,
      computed: 8,
    }


    expect(essenceSelector(state)).toEqual(selection)


  })

})

describe('AttributeSelector', function () {
  it('should return all of the computed attributes', function () {
    let state = {
      character: {
        attributes:{},
        items: [],
        ware:[],
      },
    }

    let attributes = {}
    let results = {}
    const attributeArray = [
      attributeTypes.STRENGTH,
      attributeTypes.AGILITY,
      attributeTypes.WILLPOWER,
      attributeTypes.MAGIC,
      attributeTypes.BODY,
      attributeTypes.REACTION,
      attributeTypes.CHARISMA,
      attributeTypes.INTUITION,
      attributeTypes.LOGIC,
      attributeTypes.ESSENCE,
    ]

    attributeArray.forEach(attribute => {
      attributes[attribute] = {
        key: attribute,
        minValue: 1,
        maxValue: 5,
        value: 4,
      }

      results[attribute] = {
        base: 4,
        mods: 0,
        computed: 4,
      }
    })

    state.character.attributes = attributes

    expect(attributeSelector(state)).toEqual(results)

  })

  describe('Resources Selector', function () {
    it('should calculate your remaining resources', function () {
      const state = {
        character: {
          creation: {
            availableResources: 10000,
          },
          attributes: {
            essence: {
              key: 'essence',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
          },
          items: [{
            name: 'Reaction Enhancers 1',
            mods: [
              {
                modType: modTypes.ESSENCE_MOD,
                effect: 2,
              },
              {
                modType: modTypes.RESOURCES_MOD,
                effect: 5000,
              },
            ],
          },
          {
            name: 'Reaction Enhancers 1',
            mods: [
              {
                modType: modTypes.ESSENCE_MOD,
                effect: 2,
              },
              {
                modType: modTypes.RESOURCES_MOD,
                effect: 2000,
              },
            ],
          }],
          ware:[],
          weapons: [],
        },
      }

      const expectedValue = 3000
      expect(resourcesSelector(state)).toEqual(expectedValue)

    })

    it('should calculate costs across both ware and items', function () {
      const state = {
        character: {
          creation: {
            availableResources: 10000,
          },
          attributes: {
            essence: {
              key: 'essence',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
          },
          items: [{
            name: 'Reaction Enhancers 1',
            mods: [
              {
                modType: modTypes.ESSENCE_MOD,
                effect: 2,
              },
              {
                modType: modTypes.RESOURCES_MOD,
                effect: 5000,
              },
            ],
          }],
          weapons: [],
          ware:[
            {
              name: 'Reaction Enhancers 1',
              mods: [
                {
                  modType: modTypes.ESSENCE_MOD,
                  effect: 2,
                },
                {
                  modType: modTypes.RESOURCES_MOD,
                  effect: 2000,
                },

              ],
            },
          ],
        },
      }

      const expectedValue = 3000
      expect(resourcesSelector(state)).toEqual(expectedValue)
    })

  })
  describe('CharacterSheetSelector', () => {
    let state = null
    beforeEach(() => {

      state = {
        character: {
          creation: {
            availableResources: 10000,
          },
          attributes: {
            essence: {
              key: 'essence',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            strength: {
              key: 'strength',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            body: {
              key: 'body',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            agility: {
              key: 'agility',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            reaction: {
              key: 'reaction',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            charisma: {
              key: 'charisma',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            intuition: {
              key: 'intuition',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            logic: {
              key: 'logic',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
            willpower: {
              key: 'willpower',
              minValue: 1,
              maxValue: 5,
              value: 4,
            },
          },
          items: [],
          weapons: [],
          ware:[
            {
              name: 'Reaction Enhancers 1',
              mods: [
                {
                  modType: modTypes.PHYSICAL_LIMIT_MOD,
                  effect: 1,
                },
                {
                  modType: modTypes.RESOURCES_MOD,
                  effect: 2000,
                },

              ],
            },
          ],
        },
      }
    })
    it('should calculate limits at the end even if ware affects it', () => {

      const expectedPhysicalLimit = 7
      expect(characterSheetSelector(state).physicalLimit).toBe(expectedPhysicalLimit)
    })

    it('should calculate the number of physical boxes', () => {

      const expectedPhysicalBoxes = 10
      expect(characterSheetSelector(state).physicalBoxes).toBe(expectedPhysicalBoxes)
    })
    it('should calculate the overflow with an augmentation', () => {
      state.character.ware.push({
        name: 'overflow Thing',
        mods: [
          {
            modType: modTypes.OVERFLOW_MOD,
            effect: 1,
          },
          {
            modType: modTypes.RESOURCES_MOD,
            effect: 2000,
          },

        ],
      })
      const expectedOverflow = 5
      expect(characterSheetSelector(state).overflowBoxes).toBe(expectedOverflow)
    })
  })
})
