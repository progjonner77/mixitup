/* global mixitup, h */

/**
 * @constructor
 * @memberof    mixitup
 * @private
 * @since       3.0.0
 * @param       {mixitup.Mixer} mixer
 */

mixitup.Facade = function Mixer(mixer) {
    mixitup.Base.call(this);

    this.execAction('construct', 0);

    this.init           = mixer.init.bind(mixer); // * break _init in to methods (i.e. mapInitialState)
    this.show           = mixer.show.bind(mixer);
    this.hide           = mixer.hide.bind(mixer);
    this.filter         = mixer.filter.bind(mixer); // * _filter -> filterTargets
    this.sort           = mixer.sort.bind(mixer); // * _sort -> sortTargets
    this.changeLayout   = mixer.changeLayout.bind(mixer);
    this.multiMix       = mixer.multiMix.bind(mixer);
    this.tween          = mixer.tween.bind(mixer);
    this.insert         = mixer.insert.bind(mixer); // * _insert -> insertTargets
    this.insertBefore   = mixer.insertBefore.bind(mixer);
    this.insertAfter    = mixer.insertAfter.bind(mixer);
    this.prepend        = mixer.prepend.bind(mixer);
    this.append         = mixer.append.bind(mixer);
    this.remove         = mixer.remove.bind(mixer);
    this.destroy        = mixer.destroy.bind(mixer);
    this.forceRefresh   = mixer.forceRefresh.bind(mixer);
    this.isMixing       = mixer.isMixing.bind(mixer);
    this.getOperation   = mixer.getOperation.bind(mixer);
    this.getOption      = mixer.getOption.bind(mixer);
    this.setOptions     = mixer.setOptions.bind(mixer);
    this.getState       = mixer.getState.bind(mixer);

    this.execAction('construct', 1);

    h.freeze(this);
    h.seal(this);
};

mixitup.BaseStatic.call(mixitup.Facade);

mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);

mixitup.Facade.prototype.constructor = mixitup.Facade;