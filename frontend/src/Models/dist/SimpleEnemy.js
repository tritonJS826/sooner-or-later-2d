"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var SimpleEnemy = /** @class */ (function () {
    function SimpleEnemy(_a) {
        var _this = this;
        var id = _a.id, _b = _a.frontSide, frontSide = _b === void 0 ? "" : _b, _c = _a.backSide, backSide = _c === void 0 ? "" : _c, _d = _a.health, health = _d === void 0 ? 100 : _d, speed = _a.speed, _e = _a.damage, damage = _e === void 0 ? 100 : _e, _f = _a.coords, coords = _f === void 0 ? [0, 0] : _f, killMyself = _a.killMyself;
        this.id = id;
        this.frontSide = frontSide;
        this.backSide = backSide;
        this.health = health;
        this.speed = (Math.random() + 0.1) * 0.01;
        this.damage = damage;
        this.coords = coords;
        this.killMyself = function () {
            // remove from enemy store
            killMyself();
            // remove personal timer
            _this.stopDoAnything();
        };
        mobx_1.makeObservable(this, {
            coords: mobx_1.observable,
            health: mobx_1.observable,
            speed: mobx_1.observable,
            damage: mobx_1.observable,
            startDoSomething: mobx_1.action,
            getDamage: mobx_1.action,
            killMyself: mobx_1.action
        });
    }
    SimpleEnemy.prototype.startDoSomething = function (hero) {
        var _this = this;
        this.enemyTimerId = setTimeout(function () {
            requestAnimationFrame(function () {
                var distanceYToHero = Math.abs(_this.coords[1] - hero.coords[1]);
                if (distanceYToHero < 0.01) {
                    mobx_1.runInAction(function () { return _this.fight(hero); });
                }
                else {
                    mobx_1.runInAction(function () { return _this.go(hero.coords); });
                }
            });
            _this.startDoSomething(hero);
            // fps = 16 => every 60 msec update
        }, 50);
    };
    SimpleEnemy.prototype.stopDoAnything = function () {
        clearInterval(this.enemyTimerId);
    };
    SimpleEnemy.prototype.go = function (_a) {
        var x = _a[0], y = _a[1];
        var angleInDirectionToHero = Math.atan((x - this.coords[0]) / (y - this.coords[1]));
        var deltaX = this.speed * Math.sin(angleInDirectionToHero);
        var deltaY = this.speed * Math.cos(angleInDirectionToHero);
        var newX = this.coords[0] + deltaX;
        var newY = this.coords[1] + deltaY;
        this.coords = [newX, newY];
    };
    SimpleEnemy.prototype.fight = function (target) {
        target.health -= 0.5;
    };
    SimpleEnemy.prototype.getDamage = function (damage, phrase) {
        if (phrase === this.backSide) {
            this.health -= damage;
        }
        if (this.health < 1) {
            this.killMyself();
        }
    };
    __decorate([
        mobx_1.action
    ], SimpleEnemy.prototype, "startDoSomething");
    __decorate([
        mobx_1.action
    ], SimpleEnemy.prototype, "stopDoAnything");
    return SimpleEnemy;
}());
exports["default"] = SimpleEnemy;
