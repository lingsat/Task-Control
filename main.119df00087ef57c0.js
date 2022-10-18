"use strict";
(self.webpackChunktask_control_app =
  self.webpackChunktask_control_app || []).push([
  [179],
  {
    6978: (Ze, me, x) => {
      x.r(me), x.d(me, { AuthModule: () => ht });
      var f = x(6895),
        w = x(8256),
        Z = x(7998),
        X = x(3841),
        c = x(433);
      let we = (() => {
        class ce {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (ce.ɵfac = function (H) {
            return new (H || ce)();
          }),
          (ce.ɵcmp = w.Xpm({
            type: ce,
            selectors: [["app-loading-spinner"]],
            decls: 5,
            vars: 0,
            consts: [[1, "lds-ring"]],
            template: function (H, K) {
              1 & H &&
                (w.TgZ(0, "div", 0),
                w._UZ(1, "div")(2, "div")(3, "div")(4, "div"),
                w.qZA());
            },
            styles: [
              ".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #217074;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#217074 transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",
            ],
            changeDetection: 0,
          })),
          ce
        );
      })();
      function _e(ce, De) {
        1 & ce && (w.TgZ(0, "div"), w._UZ(1, "app-loading-spinner"), w.qZA());
      }
      function Q(ce, De) {
        1 & ce &&
          (w.TgZ(0, "p", 11),
          w._uU(1, " Min 8 char, at least 1 letter and 1 number "),
          w.qZA());
      }
      function se(ce, De) {
        if (1 & ce) {
          const H = w.EpF();
          w.TgZ(0, "form", 2),
            w.NdJ("ngSubmit", function () {
              w.CHM(H);
              const Ee = w.oxw();
              return w.KtG(Ee.onSubmit());
            }),
            w.TgZ(1, "h3", 3),
            w._uU(2, "Register"),
            w.qZA(),
            w._UZ(3, "input", 4)(4, "input", 5)(5, "input", 6),
            w.YNc(6, Q, 2, 0, "p", 7),
            w.TgZ(7, "button", 8),
            w._uU(8, " Register "),
            w.qZA(),
            w.TgZ(9, "p", 9),
            w._uU(10, " Already have an account? "),
            w.TgZ(11, "a", 10),
            w.NdJ("click", function () {
              w.CHM(H);
              const Ee = w.oxw();
              return w.KtG(Ee.onShowLoginForm());
            }),
            w._uU(12, "Sign In"),
            w.qZA()()();
        }
        if (2 & ce) {
          const H = w.oxw();
          w.Q6J("formGroup", H.registerForm),
            w.xp6(6),
            w.Q6J(
              "ngIf",
              H.registerForm.controls.password.invalid &&
                H.registerForm.controls.password.dirty
            ),
            w.xp6(1),
            w.Q6J("disabled", !!H.registerForm.invalid);
        }
      }
      let ie = (() => {
        class ce {
          constructor(H, K, Ee) {
            (this.authService = H),
              (this.router = K),
              (this.ngZone = Ee),
              (this.isLoading = !1);
          }
          ngOnInit() {
            this.registerForm = new c.cw({
              login: new c.NI(null, [c.kI.required]),
              email: new c.NI(null, [
                c.kI.required,
                this.authService.checkEmailValidator,
              ]),
              password: new c.NI(null, [
                c.kI.required,
                c.kI.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
              ]),
            });
          }
          onShowLoginForm() {
            this.authService.setLoginMode(!0), this.registerForm.reset();
          }
          onSubmit() {
            this.isLoading = !0;
            const {
              login: H,
              email: K,
              password: Ee,
            } = this.registerForm.value;
            this.authService.register(H, K, Ee).subscribe({
              next: () => {
                this.authService.setLoginMode(!0),
                  (this.isLoading = !1),
                  this.ngZone.run(() => {
                    this.router.navigate(["/dashboard"]);
                  });
              },
              error: (ne) => {
                (this.isLoading = !1), alert(ne.error);
              },
            }),
              this.registerForm.reset();
          }
        }
        return (
          (ce.ɵfac = function (H) {
            return new (H || ce)(w.Y36(Z.e), w.Y36(X.F0), w.Y36(w.R0b));
          }),
          (ce.ɵcmp = w.Xpm({
            type: ce,
            selectors: [["app-register-form"]],
            decls: 2,
            vars: 2,
            consts: [
              [4, "ngIf"],
              ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"],
              [1, "form", 3, "formGroup", "ngSubmit"],
              [1, "form__title"],
              [
                "type",
                "login",
                "name",
                "login",
                "formControlName",
                "login",
                "placeholder",
                "login",
                1,
                "form__input",
              ],
              [
                "type",
                "email",
                "name",
                "email",
                "formControlName",
                "email",
                "placeholder",
                "Email",
                1,
                "form__input",
              ],
              [
                "type",
                "password",
                "name",
                "password",
                "formControlName",
                "password",
                "placeholder",
                "Password",
                1,
                "form__input",
              ],
              ["class", "form__message", 4, "ngIf"],
              ["type", "submit", 1, "form__btn", 3, "disabled"],
              [1, "form__footer"],
              [3, "click"],
              [1, "form__message"],
            ],
            template: function (H, K) {
              1 & H &&
                (w.YNc(0, _e, 2, 0, "div", 0), w.YNc(1, se, 13, 3, "form", 1)),
                2 & H &&
                  (w.Q6J("ngIf", K.isLoading),
                  w.xp6(1),
                  w.Q6J("ngIf", !K.isLoading));
            },
            dependencies: [f.O5, c._Y, c.Fj, c.JJ, c.JL, c.sg, c.u, we],
            styles: [
              ".form[_ngcontent-%COMP%]{width:100%;padding:15px;border:2px solid #217074;border-radius:10px;display:flex;flex-direction:column;box-shadow:2px 2px 8px 2px #aaaba8;position:relative;animation:showForm .5s linear}.form__title[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.5rem;font-weight:500;text-align:left}.form__input[_ngcontent-%COMP%]{margin-bottom:10px;padding:5px;font-family:Open Sans;font-size:1rem;border:none;border-bottom:2px solid #aaaba8;outline:none}.form__input[_ngcontent-%COMP%]:last-of-type{margin-bottom:2px}.form__message[_ngcontent-%COMP%]{font-size:.8rem;line-height:1;text-align:left;color:#ed413e}.form__input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#ed413e}.form__btn[_ngcontent-%COMP%]{margin:18px 0 10px;padding:10px;font-family:Open Sans;font-size:1.2rem;font-weight:700;letter-spacing:1px;border-radius:10px;background-color:#217074;border:2px solid #217074;color:#e7eaef;cursor:pointer;transition:all .2s linear}.form__btn[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074}.form__btn[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4;border-color:#d2d2d4;color:#fff;cursor:auto}.form__footer[_ngcontent-%COMP%]{font-size:.9rem;text-align:center}.form__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-decoration:none;color:#217074;cursor:pointer}.form__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@keyframes showForm{0%{top:-15px;opacity:0}to{top:0;opacity:1}}",
            ],
          })),
          ce
        );
      })();
      function G(ce, De) {
        1 & ce && (w.TgZ(0, "div"), w._UZ(1, "app-loading-spinner"), w.qZA());
      }
      function he(ce, De) {
        if (1 & ce) {
          const H = w.EpF();
          w.TgZ(0, "form", 2),
            w.NdJ("ngSubmit", function () {
              w.CHM(H);
              const Ee = w.oxw();
              return w.KtG(Ee.onSubmit());
            }),
            w.TgZ(1, "h3", 3),
            w._uU(2, "Login"),
            w.qZA(),
            w._UZ(3, "input", 4)(4, "input", 5),
            w.TgZ(5, "button", 6),
            w._uU(6, " Login "),
            w.qZA(),
            w.TgZ(7, "p", 7),
            w._uU(8, " Don't have an account? "),
            w.TgZ(9, "a", 8),
            w.NdJ("click", function () {
              w.CHM(H);
              const Ee = w.oxw();
              return w.KtG(Ee.onShowRegisterForm());
            }),
            w._uU(10, "Register"),
            w.qZA()()();
        }
        if (2 & ce) {
          const H = w.oxw();
          w.Q6J("formGroup", H.loginForm),
            w.xp6(5),
            w.Q6J("disabled", !!H.loginForm.invalid);
        }
      }
      let Ae = (() => {
        class ce {
          constructor(H, K, Ee) {
            (this.authService = H),
              (this.router = K),
              (this.ngZone = Ee),
              (this.isLoading = !1);
          }
          ngOnInit() {
            this.loginForm = new c.cw({
              email: new c.NI(null, [
                c.kI.required,
                this.authService.checkEmailValidator,
              ]),
              password: new c.NI(null, [c.kI.required]),
            });
          }
          onShowRegisterForm() {
            this.authService.setLoginMode(!1), this.loginForm.reset();
          }
          onSubmit() {
            this.isLoading = !0;
            const { email: H, password: K } = this.loginForm.value;
            this.authService.login(H, K).subscribe({
              next: () => {
                (this.isLoading = !1),
                  this.ngZone.run(() => {
                    this.router.navigate(["/dashboard"]);
                  });
              },
              error: (Ee) => {
                (this.isLoading = !1), alert(Ee.error);
              },
            }),
              this.loginForm.reset();
          }
        }
        return (
          (ce.ɵfac = function (H) {
            return new (H || ce)(w.Y36(Z.e), w.Y36(X.F0), w.Y36(w.R0b));
          }),
          (ce.ɵcmp = w.Xpm({
            type: ce,
            selectors: [["app-login-form"]],
            decls: 2,
            vars: 2,
            consts: [
              [4, "ngIf"],
              ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"],
              [1, "form", 3, "formGroup", "ngSubmit"],
              [1, "form__title"],
              [
                "type",
                "email",
                "name",
                "email",
                "formControlName",
                "email",
                "placeholder",
                "Email",
                1,
                "form__input",
              ],
              [
                "type",
                "password",
                "name",
                "password",
                "formControlName",
                "password",
                "placeholder",
                "Password",
                1,
                "form__input",
              ],
              ["type", "submit", 1, "form__btn", 3, "disabled"],
              [1, "form__footer"],
              [3, "click"],
            ],
            template: function (H, K) {
              1 & H &&
                (w.YNc(0, G, 2, 0, "div", 0), w.YNc(1, he, 11, 2, "form", 1)),
                2 & H &&
                  (w.Q6J("ngIf", K.isLoading),
                  w.xp6(1),
                  w.Q6J("ngIf", !K.isLoading));
            },
            dependencies: [f.O5, c._Y, c.Fj, c.JJ, c.JL, c.sg, c.u, we],
            styles: [
              ".form[_ngcontent-%COMP%]{width:100%;padding:15px;border:2px solid #217074;border-radius:10px;display:flex;flex-direction:column;box-shadow:2px 2px 8px 2px #aaaba8;position:relative;animation:showForm .5s linear}.form__title[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.5rem;font-weight:500;text-align:left}.form__input[_ngcontent-%COMP%]{margin-bottom:10px;padding:5px;font-family:Open Sans;font-size:1rem;border:none;border-bottom:2px solid #aaaba8;outline:none}.form__input[_ngcontent-%COMP%]:last-of-type{margin-bottom:2px}.form__message[_ngcontent-%COMP%]{font-size:.8rem;line-height:1;text-align:left;color:#ed413e}.form__input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#ed413e}.form__btn[_ngcontent-%COMP%]{margin:18px 0 10px;padding:10px;font-family:Open Sans;font-size:1.2rem;font-weight:700;letter-spacing:1px;border-radius:10px;background-color:#217074;border:2px solid #217074;color:#e7eaef;cursor:pointer;transition:all .2s linear}.form__btn[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074}.form__btn[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4;border-color:#d2d2d4;color:#fff;cursor:auto}.form__footer[_ngcontent-%COMP%]{font-size:.9rem;text-align:center}.form__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-decoration:none;color:#217074;cursor:pointer}.form__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@keyframes showForm{0%{top:-15px;opacity:0}to{top:0;opacity:1}}",
            ],
          })),
          ce
        );
      })();
      function le(ce, De) {
        1 & ce && w._UZ(0, "app-register-form");
      }
      function Oe(ce, De) {
        1 & ce && w._UZ(0, "app-login-form");
      }
      let Re = (() => {
        class ce {
          constructor(H, K, Ee) {
            (this.authService = H),
              (this.router = K),
              (this.ngZone = Ee),
              (this.isLoginMode = !0);
          }
          ngOnInit() {
            localStorage.getItem("userData") &&
              this.ngZone.run(() => {
                this.router.navigate(["/dashboard"]);
              }),
              (this.authSub = this.authService.isLoginMode.subscribe((H) => {
                this.isLoginMode = H;
              }));
          }
          ngOnDestroy() {
            this.authSub.unsubscribe();
          }
        }
        return (
          (ce.ɵfac = function (H) {
            return new (H || ce)(w.Y36(Z.e), w.Y36(X.F0), w.Y36(w.R0b));
          }),
          (ce.ɵcmp = w.Xpm({
            type: ce,
            selectors: [["app-auth"]],
            decls: 6,
            vars: 2,
            consts: [
              [1, "auth"],
              [1, "auth__form"],
              [4, "ngIf"],
              [1, "auth__image"],
              ["src", "./assets/images/auth.jpg", "alt", "Authorization"],
            ],
            template: function (H, K) {
              1 & H &&
                (w.TgZ(0, "div", 0)(1, "div", 1),
                w.YNc(2, le, 1, 0, "app-register-form", 2),
                w.YNc(3, Oe, 1, 0, "app-login-form", 2),
                w.qZA(),
                w.TgZ(4, "div", 3),
                w._UZ(5, "img", 4),
                w.qZA()()),
                2 & H &&
                  (w.xp6(2),
                  w.Q6J("ngIf", !K.isLoginMode),
                  w.xp6(1),
                  w.Q6J("ngIf", K.isLoginMode));
            },
            dependencies: [f.O5, ie, Ae],
            styles: [
              ".auth[_ngcontent-%COMP%]{height:calc(100vh - 125px);padding:20px 0;display:flex;justify-content:space-around;align-items:center}.auth__form[_ngcontent-%COMP%]{width:100%;max-width:300px;text-align:center}.auth__image[_ngcontent-%COMP%]{width:60%}.auth__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@media (max-width: 991.98px){.auth__image[_ngcontent-%COMP%]{width:50%}}@media (max-width: 767.98px){.auth[_ngcontent-%COMP%]{height:calc(100vh - 105px)}.auth__image[_ngcontent-%COMP%]{display:none}}@media (max-width: 429.98px){.auth[_ngcontent-%COMP%]{height:calc(100vh - 124px)}}",
            ],
          })),
          ce
        );
      })();
      var Ue = x(529),
        je = x(4466);
      let ht = (() => {
        class ce {}
        return (
          (ce.ɵfac = function (H) {
            return new (H || ce)();
          }),
          (ce.ɵmod = w.oAB({ type: ce })),
          (ce.ɵinj = w.cJS({
            imports: [
              f.ez,
              Ue.JF,
              c.UX,
              je.m,
              X.Bz.forChild([{ path: "", component: Re }]),
            ],
          })),
          ce
        );
      })();
    },
    7998: (Ze, me, x) => {
      x.d(me, { e: () => Q });
      var f = x(1135),
        w = x(8505);
      class Z {
        constructor(ie, G, he, Ae) {
          (this.login = ie),
            (this.email = G),
            (this.userId = he),
            (this._token = Ae);
        }
        get token() {
          return this._token;
        }
      }
      var X = x(2340),
        c = x(8256),
        we = x(529),
        _e = x(3841);
      let Q = (() => {
        class se {
          constructor(G, he) {
            (this.http = G),
              (this.router = he),
              (this.user = new f.X(null)),
              (this.isLoginMode = new f.X(!0));
          }
          register(G, he, Ae) {
            return this.http
              .post(`${X.N.SERVER_URL}/api/auth/register`, {
                login: G,
                email: he,
                password: Ae,
              })
              .pipe(
                (0, w.b)((le) => {
                  this.handleAuth(le.login, le.email, le.userId, le.jwt_token);
                })
              );
          }
          login(G, he) {
            return this.http
              .post(`${X.N.SERVER_URL}/api/auth/login`, {
                email: G,
                password: he,
              })
              .pipe(
                (0, w.b)((Ae) => {
                  this.handleAuth(Ae.login, Ae.email, Ae.userId, Ae.jwt_token);
                })
              );
          }
          autoLogin() {
            const G = JSON.parse(localStorage.getItem("userData"));
            if (!G) return;
            const he = new Z(G.login, G.email, G.userId, G._token);
            he.token && this.user.next(he);
          }
          logout() {
            this.user.next(null),
              this.router.navigate(["/auth"]),
              localStorage.removeItem("userData");
          }
          handleAuth(G, he, Ae, le) {
            const Oe = new Z(G, he, Ae, le);
            this.user.next(Oe),
              localStorage.setItem("userData", JSON.stringify(Oe));
          }
          setLoginMode(G) {
            this.isLoginMode.next(G);
          }
          checkEmailValidator(G) {
            const he = /^\S+@\S+\.\S+$/.test(G.value);
            return null === G.value || he ? null : { checkEmailValidator: !0 };
          }
        }
        return (
          (se.ɵfac = function (G) {
            return new (G || se)(c.LFG(we.eN), c.LFG(_e.F0));
          }),
          (se.ɵprov = c.Yz7({
            token: se,
            factory: se.ɵfac,
            providedIn: "root",
          })),
          se
        );
      })();
    },
    2558: (Ze, me, x) => {
      x.r(me), x.d(me, { FeaturesModule: () => N });
      var f = x(6895),
        w = x(4466),
        Z = x(529),
        X = x(3841),
        c = x(8256);
      let we = (() => {
        class E {
          constructor() {
            (this.showAddBoardForm = !1),
              (this.editBoardMode = !1),
              (this.editDefaultBoardData = { name: "", description: "" }),
              (this.showAddTaskForm = !1),
              (this.editTaskMode = !1),
              (this.editDefaultTaskName = ""),
              (this.defaultTaskStatus = "");
          }
          closeAddBoardForm() {
            this.showAddBoardForm = !1;
          }
          openAddBoardForm() {
            this.showAddBoardForm = !0;
          }
          closeAddTaskForm() {
            this.showAddTaskForm = !1;
          }
          openAddTaskForm(I) {
            (this.showAddTaskForm = !0), (this.defaultTaskStatus = I);
          }
          setEditedBoardId(I, k, Y) {
            (this.editedBoardId = I),
              (this.editBoardMode = !0),
              (this.editDefaultBoardData = { name: k, description: Y }),
              this.openAddBoardForm();
          }
          setEditedTaskId(I, k, Y) {
            (this.editedTaskId = I),
              (this.editTaskMode = !0),
              (this.editDefaultTaskName = k),
              this.openAddTaskForm(Y);
          }
          clearBoardMode() {
            (this.editBoardMode = !1),
              (this.editDefaultBoardData = { name: "", description: "" });
          }
          clearTaskMode() {
            (this.editTaskMode = !1), (this.editDefaultTaskName = "");
          }
        }
        return (
          (E.ɵfac = function (I) {
            return new (I || E)();
          }),
          (E.ɵprov = c.Yz7({ token: E, factory: E.ɵfac, providedIn: "root" })),
          E
        );
      })();
      var _e = x(8541),
        Q = x(433),
        se = x(8421),
        ie = x(9751),
        G = x(5577),
        he = x(1144),
        Ae = x(576),
        le = x(3268);
      const Oe = ["addListener", "removeListener"],
        Re = ["addEventListener", "removeEventListener"],
        Ue = ["on", "off"];
      function je(E, U, I, k) {
        if (((0, Ae.m)(I) && ((k = I), (I = void 0)), k))
          return je(E, U, I).pipe((0, le.Z)(k));
        const [Y, Ce] = (function H(E) {
          return (
            (0, Ae.m)(E.addEventListener) && (0, Ae.m)(E.removeEventListener)
          );
        })(E)
          ? Re.map((Me) => (pt) => E[Me](U, pt, I))
          : (function ce(E) {
              return (0, Ae.m)(E.addListener) && (0, Ae.m)(E.removeListener);
            })(E)
          ? Oe.map(ht(E, U))
          : (function De(E) {
              return (0, Ae.m)(E.on) && (0, Ae.m)(E.off);
            })(E)
          ? Ue.map(ht(E, U))
          : [];
        if (!Y && (0, he.z)(E))
          return (0, G.z)((Me) => je(Me, U, I))((0, se.Xf)(E));
        if (!Y) throw new TypeError("Invalid event target");
        return new ie.y((Me) => {
          const pt = (...gt) => Me.next(1 < gt.length ? gt : gt[0]);
          return Y(pt), () => Ce(pt);
        });
      }
      function ht(E, U) {
        return (I) => (k) => E[I](U, k);
      }
      var K = x(9300);
      let Ee = (() => {
          class E {
            constructor(I, k) {
              (this.element = I),
                (this.document = k),
                (this.clickOutside = new c.vpe());
            }
            isInside(I) {
              return I === this.element.nativeElement;
            }
            ngAfterViewInit() {
              this.documentClickSub = je(this.document, "click")
                .pipe((0, K.h)((I) => this.isInside(I.target)))
                .subscribe(() => {
                  this.clickOutside.emit();
                });
            }
            ngOnDestroy() {
              this.documentClickSub?.unsubscribe();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(c.SBq), c.Y36(f.K0));
            }),
            (E.ɵdir = c.lG2({
              type: E,
              selectors: [["", "clickOutside", ""]],
              outputs: { clickOutside: "clickOutside" },
            })),
            E
          );
        })(),
        ne = (() => {
          class E {
            constructor(I, k, Y) {
              (this.formsService = I),
                (this.userDataService = k),
                (this.activatedRoute = Y),
                (this.editMode = !1),
                (this.editDefaultName = ""),
                (this.defaultStatus = "todo");
            }
            ngOnInit() {
              this.activatedRoute.params.subscribe((I) => {
                this.currentBoardId = I.id;
              }),
                (this.defaultStatus = this.formsService.defaultTaskStatus),
                (this.editMode = this.formsService.editTaskMode),
                (this.editedTaskId = this.formsService.editedTaskId),
                (this.editDefaultName = this.formsService.editDefaultTaskName);
            }
            onCloseAddTaskModal() {
              this.formsService.closeAddTaskForm(),
                this.formsService.clearTaskMode();
            }
            onSubmit(I) {
              this.editMode
                ? this.userDataService.editTask(
                    this.currentBoardId,
                    this.editedTaskId,
                    I.value.task,
                    I.value.taskState
                  )
                : this.userDataService.addTask(
                    this.currentBoardId,
                    I.value.task,
                    I.value.taskState
                  ),
                I.reset(),
                this.formsService.clearTaskMode(),
                this.onCloseAddTaskModal();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(we), c.Y36(_e.M), c.Y36(X.gz));
            }),
            (E.ɵcmp = c.Xpm({
              type: E,
              selectors: [["app-add-task-form"]],
              decls: 16,
              vars: 5,
              consts: [
                ["clickOutside", "", 1, "background", 3, "clickOutside"],
                [1, "wrapper"],
                [1, "form", 3, "ngSubmit"],
                ["addTaskForm", "ngForm"],
                [
                  "name",
                  "taskState",
                  "required",
                  "",
                  1,
                  "form__select",
                  3,
                  "ngModel",
                ],
                ["value", "todo", 3, "defaultSelected"],
                ["value", "progress"],
                ["value", "done"],
                [
                  "rows",
                  "3",
                  "placeholder",
                  "Task",
                  "name",
                  "task",
                  "required",
                  "",
                  "pattern",
                  "^(\\s+\\S+\\s*)*(?!\\s).*$",
                  1,
                  "form__textarea",
                  3,
                  "ngModel",
                ],
                ["type", "submit", 1, "form__btn", 3, "disabled"],
                ["type", "button", 1, "form__close", 3, "click"],
              ],
              template: function (I, k) {
                if (1 & I) {
                  const Y = c.EpF();
                  c.TgZ(0, "div", 0),
                    c.NdJ("clickOutside", function () {
                      return k.onCloseAddTaskModal();
                    }),
                    c.TgZ(1, "div", 1)(2, "form", 2, 3),
                    c.NdJ("ngSubmit", function () {
                      c.CHM(Y);
                      const Me = c.MAs(3);
                      return c.KtG(k.onSubmit(Me));
                    }),
                    c.TgZ(4, "select", 4)(5, "option", 5),
                    c._uU(6, "ToDo"),
                    c.qZA(),
                    c.TgZ(7, "option", 6),
                    c._uU(8, "In Progress"),
                    c.qZA(),
                    c.TgZ(9, "option", 7),
                    c._uU(10, "Done"),
                    c.qZA()(),
                    c._UZ(11, "textarea", 8),
                    c.TgZ(12, "button", 9),
                    c._uU(13),
                    c.qZA(),
                    c.TgZ(14, "button", 10),
                    c.NdJ("click", function () {
                      return k.onCloseAddTaskModal();
                    }),
                    c._uU(15, " X "),
                    c.qZA()()()();
                }
                if (2 & I) {
                  const Y = c.MAs(3);
                  c.xp6(4),
                    c.Q6J("ngModel", k.defaultStatus),
                    c.xp6(1),
                    c.Q6J("defaultSelected", !0),
                    c.xp6(6),
                    c.Q6J("ngModel", k.editDefaultName),
                    c.xp6(1),
                    c.Q6J("disabled", Y.invalid),
                    c.xp6(1),
                    c.hij(" ", k.editMode ? "Edit Task" : "Save Task", " ");
                }
              },
              dependencies: [
                Q._Y,
                Q.YN,
                Q.Kr,
                Q.Fj,
                Q.EJ,
                Q.JJ,
                Q.JL,
                Q.Q7,
                Q.c5,
                Q.On,
                Q.F,
                Ee,
              ],
              styles: [
                ".background[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:55;background-color:#00000080;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;justify-content:center;align-items:center}.wrapper[_ngcontent-%COMP%]{width:90%;max-width:300px;background-color:#e7eaef;padding:25px 20px;border:2px solid #217074;border-radius:10px;position:relative}.form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.form__select[_ngcontent-%COMP%]{padding:5px;margin-bottom:15px;font-family:Open Sans;font-size:1rem;background-color:transparent;color:#000;border:2px solid #aaaba8;outline:none}.form__select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#e7eaef}.form__select[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4}.form__textarea[_ngcontent-%COMP%]{padding:5px;margin-bottom:15px;font-family:Open Sans;font-size:1rem;background-color:transparent;color:#000;border:2px solid #aaaba8;outline:none;resize:none}.form__select.ng-invalid.ng-touched[_ngcontent-%COMP%], .form__textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#ed413e}.form__btn[_ngcontent-%COMP%]{padding:5px;font-family:Open Sans;font-size:1.2rem;font-weight:700;letter-spacing:1px;border-radius:10px;background-color:#217074;border:2px solid #217074;color:#e7eaef;cursor:pointer;transition:all .2s linear}.form__btn[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074}.form__btn[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4;border-color:#d2d2d4;color:#fff;cursor:auto}.form__close[_ngcontent-%COMP%]{width:20px;height:20px;font-weight:700;background-color:red;color:#fff;border:none;border-radius:50%;position:absolute;top:5px;right:5px;z-index:1;cursor:pointer;transition:all .2s linear}.form__close[_ngcontent-%COMP%]:hover{transform:translate(2px,-2px)}",
              ],
            })),
            E
          );
        })();
      function ae(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "button", 4)(1, "img", 18),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onArchiveTask());
            }),
            c.qZA()();
        }
      }
      function Pe(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "li", 19)(1, "p", 20),
            c._uU(2),
            c.qZA(),
            c.TgZ(3, "button", 21)(4, "img", 6),
            c.NdJ("click", function () {
              const Ce = c.CHM(I).index,
                Me = c.oxw();
              return c.KtG(Me.onDeleteComment(Ce));
            }),
            c.qZA()()();
        }
        if (2 & E) {
          const I = U.$implicit;
          c.xp6(2), c.Oqu(I);
        }
      }
      let j = (() => {
          class E {
            constructor(I, k) {
              (this.formsService = I),
                (this.userDataService = k),
                (this.showControls = !1),
                (this.showComments = !1);
            }
            ngOnInit() {}
            onToggleControls() {
              this.showControls = !this.showControls;
            }
            onDeleteTask() {
              this.userDataService.deleteTask(this.task.boardId, this.task.id);
            }
            onEditTask() {
              this.formsService.setEditedTaskId(
                this.task.id,
                this.task.name,
                this.task.status
              );
            }
            onArchiveTask() {
              this.userDataService.archiveTask(this.task.boardId, this.task.id);
            }
            onToggleComments() {
              this.showComments = !this.showComments;
            }
            onDeleteComment(I) {
              this.task.comments.splice(I, 1),
                (this.task.commentsCounter = this.task.comments.length),
                this.userDataService.deleteTaskComment(
                  this.task.boardId,
                  this.task.id,
                  I
                );
            }
            onSubmit(I) {
              this.task.comments.push(I.value.comment),
                (this.task.commentsCounter = this.task.comments.length),
                this.userDataService.addTaskComment(
                  this.task.boardId,
                  this.task.id,
                  I.value.comment
                ),
                I.reset();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(we), c.Y36(_e.M));
            }),
            (E.ɵcmp = c.Xpm({
              type: E,
              selectors: [["app-task"]],
              inputs: { task: "task" },
              decls: 26,
              vars: 10,
              consts: [
                [1, "task"],
                [1, "task__text"],
                [1, "task__controls", 3, "ngClass"],
                [1, "task__date"],
                ["type", "button", 1, "btn"],
                ["src", "./assets/images/edit.svg", "alt", "Edit", 3, "click"],
                [
                  "src",
                  "./assets/images/delete.svg",
                  "alt",
                  "Delete",
                  3,
                  "click",
                ],
                ["type", "button", "class", "btn", 4, "ngIf"],
                [1, "task__btn", 3, "click"],
                [1, "task__dot"],
                [1, "task__comments", 3, "click"],
                ["src", "./assets/images/comment.svg", "alt", "Comments"],
                [1, "comments", 3, "ngClass"],
                [1, "comments__list"],
                ["class", "comments__item", 4, "ngFor", "ngForOf"],
                [1, "comments__form", 3, "ngSubmit"],
                ["addCommentForm", "ngForm"],
                [
                  "name",
                  "comment",
                  "id",
                  "comment",
                  "rows",
                  "1",
                  "placeholder",
                  "Comment...",
                  "ngModel",
                  "",
                ],
                [
                  "src",
                  "./assets/images/archive.svg",
                  "alt",
                  "Archive",
                  3,
                  "click",
                ],
                [1, "comments__item"],
                [1, "comments__text"],
                ["type", "button", 1, "comments__delete"],
              ],
              template: function (I, k) {
                if (1 & I) {
                  const Y = c.EpF();
                  c.TgZ(0, "div", 0)(1, "p", 1),
                    c._uU(2),
                    c.qZA(),
                    c.TgZ(3, "div", 2)(4, "span", 3),
                    c._uU(5),
                    c.ALo(6, "date"),
                    c.qZA(),
                    c.TgZ(7, "button", 4)(8, "img", 5),
                    c.NdJ("click", function () {
                      return k.onEditTask();
                    }),
                    c.qZA()(),
                    c.TgZ(9, "button", 4)(10, "img", 6),
                    c.NdJ("click", function () {
                      return k.onDeleteTask();
                    }),
                    c.qZA()(),
                    c.YNc(11, ae, 2, 0, "button", 7),
                    c.qZA(),
                    c.TgZ(12, "div", 8),
                    c.NdJ("click", function () {
                      return k.onToggleControls();
                    }),
                    c._UZ(13, "div", 9),
                    c.qZA(),
                    c.TgZ(14, "div", 10),
                    c.NdJ("click", function () {
                      return k.onToggleComments();
                    }),
                    c._UZ(15, "img", 11),
                    c.TgZ(16, "span"),
                    c._uU(17),
                    c.qZA()(),
                    c.TgZ(18, "div", 12)(19, "ul", 13),
                    c.YNc(20, Pe, 5, 1, "li", 14),
                    c.qZA(),
                    c.TgZ(21, "form", 15, 16),
                    c.NdJ("ngSubmit", function () {
                      c.CHM(Y);
                      const Me = c.MAs(22);
                      return c.KtG(k.onSubmit(Me));
                    }),
                    c._UZ(23, "textarea", 17),
                    c.TgZ(24, "button"),
                    c._uU(25, "Add"),
                    c.qZA()()()();
                }
                2 & I &&
                  (c.xp6(2),
                  c.Oqu(k.task.name),
                  c.xp6(1),
                  c.Q6J("ngClass", k.showControls ? "show" : ""),
                  c.xp6(2),
                  c.Oqu(c.xi3(6, 7, k.task.createdDate, "dd/MM/YYYY")),
                  c.xp6(6),
                  c.Q6J("ngIf", "done" === k.task.status),
                  c.xp6(6),
                  c.Oqu(k.task.commentsCounter),
                  c.xp6(1),
                  c.Q6J("ngClass", k.showComments ? "show" : ""),
                  c.xp6(2),
                  c.Q6J("ngForOf", k.task.comments));
              },
              dependencies: [
                f.mk,
                f.sg,
                f.O5,
                Q._Y,
                Q.Fj,
                Q.JJ,
                Q.JL,
                Q.On,
                Q.F,
                f.uU,
              ],
              styles: [
                '.task[_ngcontent-%COMP%]{position:relative;padding:15px 25px 5px 15px;margin-bottom:10px;background-color:#d2d2d4;text-align:left;transition:all .1s linear}.task[_ngcontent-%COMP%]   .task__text[_ngcontent-%COMP%]{font-size:1rem;line-height:1.2;font-weight:500}.task__date[_ngcontent-%COMP%]{margin-right:auto;font-size:.8rem;color:#217074}.task__controls[_ngcontent-%COMP%]{display:none;justify-content:space-between;align-items:center;padding-top:10px;padding-right:5px;height:100%;text-align:right}.task__controls.show[_ngcontent-%COMP%]{display:flex}.task__btn[_ngcontent-%COMP%]{width:20px;height:45px;padding-left:5px;padding-right:5px;position:absolute;top:0;right:5px;z-index:1;cursor:pointer}.task__btn[_ngcontent-%COMP%]:hover   .task__dot[_ngcontent-%COMP%], .task__btn[_ngcontent-%COMP%]:hover   .task__dot[_ngcontent-%COMP%]:after, .task__btn[_ngcontent-%COMP%]:hover   .task__dot[_ngcontent-%COMP%]:before{background-color:#217074}.task__dot[_ngcontent-%COMP%]{width:8px;height:8px;background-color:#fff;border-radius:50%;position:absolute;top:19px;left:50%;z-index:1;transform:translate(-50%)}.task__dot[_ngcontent-%COMP%]:before, .task__dot[_ngcontent-%COMP%]:after{content:"";width:8px;height:8px;background-color:#fff;border-radius:50%;position:absolute}.task__dot[_ngcontent-%COMP%]:before{top:-11px}.task__dot[_ngcontent-%COMP%]:after{top:11px}.task__comments[_ngcontent-%COMP%]{margin-top:10px;width:53px;display:flex;align-items:center;cursor:pointer}.task__comments[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:5px;width:18px;height:18px}.task__comments[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:30px;font-size:1rem;color:#217074}.task__comments[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .task__comments[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}.comments[_ngcontent-%COMP%]{display:none;margin:10px 0}.comments__list[_ngcontent-%COMP%]{list-style:none}.comments__item[_ngcontent-%COMP%]{width:96%;margin-bottom:5px;padding:10px;border-radius:10px;background-color:#e7eaef;position:relative}.comments__text[_ngcontent-%COMP%]{font-size:1rem;line-height:1}.comments__delete[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;top:50%;right:-33px;z-index:1;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;background-color:transparent;border-radius:50%;border:none;cursor:pointer;transition:all .1s linear}.comments__delete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.comments__delete[_ngcontent-%COMP%]:hover{background-color:#e7eaef}.comments__form[_ngcontent-%COMP%]{margin-top:10px;width:96%;display:grid;grid-template-columns:1fr 50px}.comments__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px;font-size:1rem;line-height:1;border:2px solid #217074;border-right:none;border-radius:10px 0 0 10px;outline:none;resize:none}.comments__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Open Sans;font-size:1rem;line-height:1;font-weight:600;color:#217074;border:2px solid #217074;border-radius:0 10px 10px 0;cursor:pointer;transition:all .1s linear}.comments__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#e7eaef;background-color:#217074}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;background-color:transparent;border-radius:50%;border:none;cursor:pointer;transition:all .1s linear}.btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.btn[_ngcontent-%COMP%]:hover{background-color:#e7eaef}.comments.show[_ngcontent-%COMP%]{display:block}@media (max-width: 991.98px){.comments__form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:.9rem}}',
              ],
              changeDetection: 0,
            })),
            E
          );
        })(),
        W = (() => {
          class E {
            transform(I, k) {
              return void 0 === k
                ? I
                : I.filter((Y) =>
                    Y.name.toLowerCase().includes(k.toLowerCase())
                  );
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)();
            }),
            (E.ɵpipe = c.Yjl({ name: "filtering", type: E, pure: !0 })),
            E
          );
        })(),
        oe = (() => {
          class E {
            transform(I, k, Y) {
              if (!I || ("asc" !== Y && "desc" !== Y) || "none" === k) return I;
              let Ce = I.sort((Me, pt) =>
                Me[k] < pt[k] ? -1 : Me[k] > pt[k] ? 1 : 0
              );
              return "asc" === Y ? Ce : Ce.reverse();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)();
            }),
            (E.ɵpipe = c.Yjl({ name: "sorting", type: E, pure: !0 })),
            E
          );
        })();
      function z(E, U) {
        1 & E && (c.ynx(0), c._UZ(1, "app-add-task-form"), c.BQk());
      }
      function Te(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "div", 28),
            c.NdJ("dragstart", function () {
              const Ce = c.CHM(I).$implicit,
                Me = c.oxw();
              return c.KtG(Me.onDragStart(Ce));
            }),
            c._UZ(1, "app-task", 29),
            c.qZA();
        }
        if (2 & E) {
          const I = U.$implicit;
          c.xp6(1), c.Q6J("task", I);
        }
      }
      function fe(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "ul", 30)(1, "li", 31),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#F1BAA1"));
            }),
            c.qZA(),
            c.TgZ(2, "li", 32),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#D39CBD"));
            }),
            c.qZA(),
            c.TgZ(3, "li", 33),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#81BECE"));
            }),
            c.qZA(),
            c.TgZ(4, "li", 34),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#FEF4C0"));
            }),
            c.qZA(),
            c.TgZ(5, "li", 35),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#C9D46C"));
            }),
            c.qZA(),
            c.TgZ(6, "li", 36),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("todo", "#E7EAEF"));
            }),
            c.qZA()();
        }
      }
      function He(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "div", 28),
            c.NdJ("dragstart", function () {
              const Ce = c.CHM(I).$implicit,
                Me = c.oxw();
              return c.KtG(Me.onDragStart(Ce));
            }),
            c._UZ(1, "app-task", 29),
            c.qZA();
        }
        if (2 & E) {
          const I = U.$implicit;
          c.xp6(1), c.Q6J("task", I);
        }
      }
      function qe(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "ul", 30)(1, "li", 31),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#F1BAA1"));
            }),
            c.qZA(),
            c.TgZ(2, "li", 32),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#D39CBD"));
            }),
            c.qZA(),
            c.TgZ(3, "li", 33),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#81BECE"));
            }),
            c.qZA(),
            c.TgZ(4, "li", 34),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#FEF4C0"));
            }),
            c.qZA(),
            c.TgZ(5, "li", 35),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#C9D46C"));
            }),
            c.qZA(),
            c.TgZ(6, "li", 36),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("progress", "#E7EAEF"));
            }),
            c.qZA()();
        }
      }
      function zt(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "div", 28),
            c.NdJ("dragstart", function () {
              const Ce = c.CHM(I).$implicit,
                Me = c.oxw();
              return c.KtG(Me.onDragStart(Ce));
            }),
            c._UZ(1, "app-task", 29),
            c.qZA();
        }
        if (2 & E) {
          const I = U.$implicit;
          c.xp6(1), c.Q6J("task", I);
        }
      }
      function ze(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "ul", 30)(1, "li", 31),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#F1BAA1"));
            }),
            c.qZA(),
            c.TgZ(2, "li", 32),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#D39CBD"));
            }),
            c.qZA(),
            c.TgZ(3, "li", 33),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#81BECE"));
            }),
            c.qZA(),
            c.TgZ(4, "li", 34),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#FEF4C0"));
            }),
            c.qZA(),
            c.TgZ(5, "li", 35),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#C9D46C"));
            }),
            c.qZA(),
            c.TgZ(6, "li", 36),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onSetColor("done", "#E7EAEF"));
            }),
            c.qZA()();
        }
      }
      const dt = function (E) {
        return { backgroundColor: E };
      };
      let qt = (() => {
          class E {
            constructor(I, k, Y) {
              (this.formsService = I),
                (this.userDataService = k),
                (this.activatedRoute = Y),
                (this.todoTasks = []),
                (this.progressTasks = []),
                (this.doneTasks = []),
                (this.curentBoardId = ""),
                (this.boardName = ""),
                (this.sortValue = "none"),
                (this.sortOrder = "asc"),
                (this.colColors = {
                  todo: "#E7EAEF",
                  progress: "#E7EAEF",
                  done: "#E7EAEF",
                }),
                (this.showTodoColors = !1),
                (this.showProgressColors = !1),
                (this.showDoneColors = !1),
                (this.showSmallForm = !1);
            }
            ngOnInit() {
              this.userDataService.fetchBoards(),
                this.activatedRoute.params.subscribe((I) => {
                  this.curentBoardId = I.id;
                }),
                (this.subscription = this.userDataService
                  .getBoardsObs()
                  .subscribe((I) => {
                    this.cleartasks();
                    let k = I.find((Y) => Y._id === this.curentBoardId);
                    if (k) {
                      this.boardName = k.name;
                      let Y = k.tasks;
                      (this.colColors = k.colColors),
                        Y.forEach((Ce) => {
                          switch (Ce.status) {
                            case "todo":
                              this.todoTasks.push(Ce);
                              break;
                            case "progress":
                              this.progressTasks.push(Ce);
                              break;
                            case "done":
                              this.doneTasks.push(Ce);
                          }
                        });
                    }
                  }));
            }
            cleartasks() {
              (this.todoTasks = []),
                (this.progressTasks = []),
                (this.doneTasks = []);
            }
            onOpenAddTaskForm(I) {
              this.formsService.openAddTaskForm(I);
            }
            onDragStart(I) {
              this.currentDraggableTask = I;
            }
            onDrop(I) {
              let k = this.currentDraggableTask.status,
                Y = this.currentDraggableTask.id,
                Ce = { ...this.currentDraggableTask, status: I };
              if (I !== k) {
                switch (
                  ((this[`${k}Tasks`] = this[`${k}Tasks`].filter(
                    (Me) => Me.id !== Y
                  )),
                  I)
                ) {
                  case "todo":
                    this.todoTasks.push(Ce);
                    break;
                  case "progress":
                    this.progressTasks.push(Ce);
                    break;
                  case "done":
                    this.doneTasks.push(Ce);
                }
                this.userDataService.changeTaskStatus(
                  this.curentBoardId,
                  this.currentDraggableTask.id,
                  I
                );
              }
            }
            onShowColors(I) {
              switch (I) {
                case "todo":
                  this.showTodoColors = !this.showTodoColors;
                  break;
                case "progress":
                  this.showProgressColors = !this.showProgressColors;
                  break;
                case "done":
                  this.showDoneColors = !this.showDoneColors;
              }
            }
            onSetColor(I, k) {
              switch (I) {
                case "todo":
                  this.showTodoColors = !1;
                  break;
                case "progress":
                  this.showProgressColors = !1;
                  break;
                case "done":
                  this.showDoneColors = !1;
              }
              this.userDataService.setBoardColor(this.curentBoardId, I, k);
            }
            onToggleFilterFormShow() {
              this.showSmallForm = !this.showSmallForm;
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(we), c.Y36(_e.M), c.Y36(X.gz));
            }),
            (E.ɵcmp = c.Xpm({
              type: E,
              selectors: [["app-board"]],
              decls: 71,
              vars: 42,
              consts: [
                [4, "ngIf"],
                [1, "content"],
                [1, "content__title"],
                [1, "content__burger", 3, "click"],
                [1, "content__controls", 3, "ngClass"],
                [1, "controls__form"],
                ["boardControlForm", "ngForm"],
                [1, "controls__fieldset"],
                ["for", "filter"],
                [
                  "type",
                  "text",
                  "name",
                  "filter",
                  "id",
                  "filter",
                  "placeholder",
                  "Search...",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["for", "sort"],
                ["name", "sort", "id", "sort", 3, "ngModel", "ngModelChange"],
                ["value", "none", "disabled", ""],
                ["value", "createdDate"],
                ["value", "name"],
                ["for", "order"],
                ["name", "order", "id", "order", 3, "ngModel", "ngModelChange"],
                ["value", "asc"],
                ["value", "desc"],
                [1, "board__block"],
                [1, "board__column"],
                [1, "board__subtitle"],
                [1, "board__card", 3, "ngStyle"],
                ["type", "button", 1, "board__add", 3, "click"],
                [1, "tasks__container", 3, "dragover", "drop"],
                [
                  "class",
                  "task__item",
                  "draggable",
                  "true",
                  3,
                  "dragstart",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                ["href", "", 1, "colors__link", 3, "click"],
                ["class", "colors", 4, "ngIf"],
                ["draggable", "true", 1, "task__item", 3, "dragstart"],
                [3, "task"],
                [1, "colors"],
                [1, "colors__item", "colors__item--red", 3, "click"],
                [1, "colors__item", "colors__item--violet", 3, "click"],
                [1, "colors__item", "colors__item--blue", 3, "click"],
                [1, "colors__item", "colors__item--yellow", 3, "click"],
                [1, "colors__item", "colors__item--green", 3, "click"],
                [1, "colors__item", "colors__item--default", 3, "click"],
              ],
              template: function (I, k) {
                1 & I &&
                  (c.YNc(0, z, 2, 0, "ng-container", 0),
                  c.TgZ(1, "div", 1)(2, "h2", 2),
                  c._uU(3),
                  c.qZA(),
                  c.TgZ(4, "button", 3),
                  c.NdJ("click", function () {
                    return k.onToggleFilterFormShow();
                  }),
                  c._uU(5, "Filter/Sort"),
                  c.qZA(),
                  c.TgZ(6, "div", 4)(7, "form", 5, 6)(9, "fieldset", 7)(
                    10,
                    "label",
                    8
                  ),
                  c._uU(11, "Filter"),
                  c.qZA(),
                  c.TgZ(12, "input", 9),
                  c.NdJ("ngModelChange", function (Ce) {
                    return (k.searchText = Ce);
                  }),
                  c.qZA()(),
                  c.TgZ(13, "fieldset", 7)(14, "label", 10),
                  c._uU(15, "Sort by"),
                  c.qZA(),
                  c.TgZ(16, "select", 11),
                  c.NdJ("ngModelChange", function (Ce) {
                    return (k.sortValue = Ce);
                  }),
                  c.TgZ(17, "option", 12),
                  c._uU(18, "---"),
                  c.qZA(),
                  c.TgZ(19, "option", 13),
                  c._uU(20, "Date"),
                  c.qZA(),
                  c.TgZ(21, "option", 14),
                  c._uU(22, "Name"),
                  c.qZA()()(),
                  c.TgZ(23, "fieldset", 7)(24, "label", 15),
                  c._uU(25, "Order by"),
                  c.qZA(),
                  c.TgZ(26, "select", 16),
                  c.NdJ("ngModelChange", function (Ce) {
                    return (k.sortOrder = Ce);
                  }),
                  c.TgZ(27, "option", 17),
                  c._uU(28, "Ascending"),
                  c.qZA(),
                  c.TgZ(29, "option", 18),
                  c._uU(30, "Descending"),
                  c.qZA()()()()()(),
                  c.TgZ(31, "div", 19)(32, "div", 20)(33, "h3", 21),
                  c._uU(34, "ToDo"),
                  c.qZA(),
                  c.TgZ(35, "div", 22)(36, "button", 23),
                  c.NdJ("click", function () {
                    return k.onOpenAddTaskForm("todo");
                  }),
                  c._uU(37, " + "),
                  c.qZA(),
                  c.TgZ(38, "div", 24),
                  c.NdJ("dragover", function (Ce) {
                    return Ce.preventDefault();
                  })("drop", function () {
                    return k.onDrop("todo");
                  }),
                  c.YNc(39, Te, 2, 1, "div", 25),
                  c.ALo(40, "sorting"),
                  c.ALo(41, "filtering"),
                  c.qZA(),
                  c.TgZ(42, "a", 26),
                  c.NdJ("click", function (Ce) {
                    return k.onShowColors("todo"), Ce.preventDefault();
                  }),
                  c._uU(43, "Set column color"),
                  c.qZA(),
                  c.YNc(44, fe, 7, 0, "ul", 27),
                  c.qZA()(),
                  c.TgZ(45, "div", 20)(46, "h3", 21),
                  c._uU(47, "In Progress"),
                  c.qZA(),
                  c.TgZ(48, "div", 22)(49, "button", 23),
                  c.NdJ("click", function () {
                    return k.onOpenAddTaskForm("progress");
                  }),
                  c._uU(50, " + "),
                  c.qZA(),
                  c.TgZ(51, "div", 24),
                  c.NdJ("dragover", function (Ce) {
                    return Ce.preventDefault();
                  })("drop", function () {
                    return k.onDrop("progress");
                  }),
                  c.YNc(52, He, 2, 1, "div", 25),
                  c.ALo(53, "sorting"),
                  c.ALo(54, "filtering"),
                  c.qZA(),
                  c.TgZ(55, "a", 26),
                  c.NdJ("click", function (Ce) {
                    return k.onShowColors("progress"), Ce.preventDefault();
                  }),
                  c._uU(56, "Set column color"),
                  c.qZA(),
                  c.YNc(57, qe, 7, 0, "ul", 27),
                  c.qZA()(),
                  c.TgZ(58, "div", 20)(59, "h3", 21),
                  c._uU(60, "Done"),
                  c.qZA(),
                  c.TgZ(61, "div", 22)(62, "button", 23),
                  c.NdJ("click", function () {
                    return k.onOpenAddTaskForm("done");
                  }),
                  c._uU(63, " + "),
                  c.qZA(),
                  c.TgZ(64, "div", 24),
                  c.NdJ("dragover", function (Ce) {
                    return Ce.preventDefault();
                  })("drop", function () {
                    return k.onDrop("done");
                  }),
                  c.YNc(65, zt, 2, 1, "div", 25),
                  c.ALo(66, "sorting"),
                  c.ALo(67, "filtering"),
                  c.qZA(),
                  c.TgZ(68, "a", 26),
                  c.NdJ("click", function (Ce) {
                    return k.onShowColors("done"), Ce.preventDefault();
                  }),
                  c._uU(69, "Set column color"),
                  c.qZA(),
                  c.YNc(70, ze, 7, 0, "ul", 27),
                  c.qZA()()()),
                  2 & I &&
                    (c.Q6J("ngIf", k.formsService.showAddTaskForm),
                    c.xp6(3),
                    c.Oqu(k.boardName),
                    c.xp6(3),
                    c.Q6J("ngClass", k.showSmallForm ? "show" : ""),
                    c.xp6(6),
                    c.Q6J("ngModel", k.searchText),
                    c.xp6(4),
                    c.Q6J("ngModel", k.sortValue),
                    c.xp6(10),
                    c.Q6J("ngModel", k.sortOrder),
                    c.xp6(9),
                    c.Q6J("ngStyle", c.VKq(36, dt, k.colColors.todo)),
                    c.xp6(4),
                    c.Q6J(
                      "ngForOf",
                      c.Dn7(
                        40,
                        15,
                        c.xi3(41, 19, k.todoTasks, k.searchText),
                        k.sortValue,
                        k.sortOrder
                      )
                    ),
                    c.xp6(5),
                    c.Q6J("ngIf", k.showTodoColors),
                    c.xp6(4),
                    c.Q6J("ngStyle", c.VKq(38, dt, k.colColors.progress)),
                    c.xp6(4),
                    c.Q6J(
                      "ngForOf",
                      c.Dn7(
                        53,
                        22,
                        c.xi3(54, 26, k.progressTasks, k.searchText),
                        k.sortValue,
                        k.sortOrder
                      )
                    ),
                    c.xp6(5),
                    c.Q6J("ngIf", k.showProgressColors),
                    c.xp6(4),
                    c.Q6J("ngStyle", c.VKq(40, dt, k.colColors.done)),
                    c.xp6(4),
                    c.Q6J(
                      "ngForOf",
                      c.Dn7(
                        66,
                        29,
                        c.xi3(67, 33, k.doneTasks, k.searchText),
                        k.sortValue,
                        k.sortOrder
                      )
                    ),
                    c.xp6(5),
                    c.Q6J("ngIf", k.showDoneColors));
              },
              dependencies: [
                f.mk,
                f.sg,
                f.O5,
                f.PC,
                Q._Y,
                Q.YN,
                Q.Kr,
                Q.Fj,
                Q.EJ,
                Q.JJ,
                Q.JL,
                Q.On,
                Q.F,
                ne,
                j,
                W,
                oe,
              ],
              styles: [
                ".content[_ngcontent-%COMP%]{margin-bottom:5px;display:flex;justify-content:space-between;align-items:center}.content__title[_ngcontent-%COMP%]{padding-top:20px;margin-bottom:20px}.content__burger[_ngcontent-%COMP%]{display:none;padding:7px 10px;font-size:1.2rem;background-color:#217074;color:#e7eaef;border:2px solid #E7EAEF;border-radius:10px;cursor:pointer;transition:all .1s linear}.content__burger[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074;border-color:#217074}.controls__form[_ngcontent-%COMP%]{display:flex;gap:10px}.controls__fieldset[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:none}.controls__fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:2px;font-size:.9rem;line-height:1;font-weight:700}.controls__fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .controls__fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:150px;padding:5px;font-family:Open Sans;font-size:1rem;font-weight:600;line-height:1;color:#000;border:2px solid #AAABA8;border-radius:5px;outline:none}.board__block[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;flex-wrap:wrap;justify-content:space-around}.board__column[_ngcontent-%COMP%]{width:25%}.board__subtitle[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center;font-size:1.3rem}.board__card[_ngcontent-%COMP%]{padding:10px;background-color:#e7eaef;text-align:center}.board__add[_ngcontent-%COMP%]{margin-bottom:10px;width:100%;font-size:2rem;line-height:1;background-color:#d2d2d4;border:none;cursor:pointer;transition:all .1s linear}.board__add[_ngcontent-%COMP%]:hover{background-color:#aec09a}.tasks__container[_ngcontent-%COMP%]{min-height:234px}.colors[_ngcontent-%COMP%]{margin-top:5px;padding:5px;background-color:#d2d2d4;list-style:none;display:flex;justify-content:center;align-items:center;gap:5px}.colors__item[_ngcontent-%COMP%]{width:25px;height:25px;border:2px solid #fff;border-radius:5px;cursor:pointer}.colors__item--blue[_ngcontent-%COMP%]{background-color:#81bece}.colors__item--yellow[_ngcontent-%COMP%]{background-color:#fef4c0}.colors__item--green[_ngcontent-%COMP%]{background-color:#c9d46c}.colors__item--red[_ngcontent-%COMP%]{background-color:#f1baa1}.colors__item--violet[_ngcontent-%COMP%]{background-color:#d39cbd}.colors__item--default[_ngcontent-%COMP%]{background-color:#e7eaef}.colors__item[_ngcontent-%COMP%]:hover{border-color:#ed413e}.colors__link[_ngcontent-%COMP%]{font-size:.9rem;line-height:1;color:#217074;text-decoration:none;cursor:pointer}.colors__link[_ngcontent-%COMP%]:hover{opacity:.7}@media (max-width: 1199.98px){.board__block[_ngcontent-%COMP%]{justify-content:space-between}.board__column[_ngcontent-%COMP%]{width:31%}}@media (max-width: 767.98px){.board__block[_ngcontent-%COMP%]{justify-content:center}.board__column[_ngcontent-%COMP%]{width:75%;margin-bottom:25px}.content[_ngcontent-%COMP%]{margin-bottom:20px;flex-direction:column}.content__title[_ngcontent-%COMP%]{padding-top:10px;margin-bottom:10px}}@media (max-width: 575.98px){.board__column[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.content[_ngcontent-%COMP%]{margin-bottom:10px;width:100%;flex-direction:row;align-items:center;position:relative}.content__burger[_ngcontent-%COMP%]{display:block}.content__controls[_ngcontent-%COMP%]{padding:10px;display:none;position:absolute;top:100%;right:0;z-index:5;background-color:#217074;color:#fff;border-radius:5px}.content__controls.show[_ngcontent-%COMP%]{display:block}.controls__form[_ngcontent-%COMP%]{flex-direction:column}}",
              ],
            })),
            E
          );
        })(),
        yt = (() => {
          class E {
            constructor(I, k) {
              (this.formsService = I),
                (this.userDataService = k),
                (this.editMode = !1),
                (this.editDefaultData = { name: "", description: "" });
            }
            ngOnInit() {
              (this.editedBoardId = this.formsService.editedBoardId),
                (this.editMode = this.formsService.editBoardMode),
                (this.editDefaultData = this.formsService.editDefaultBoardData);
            }
            onCloseAddBoardModal() {
              this.formsService.closeAddBoardForm(),
                this.formsService.clearBoardMode();
            }
            onSubmit(I) {
              this.editMode
                ? this.userDataService.editBoard(
                    this.editedBoardId,
                    I.value.name
                  )
                : this.userDataService.addBoard(
                    I.value.name,
                    I.value.description
                  ),
                I.reset(),
                this.formsService.clearBoardMode(),
                this.onCloseAddBoardModal();
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(we), c.Y36(_e.M));
            }),
            (E.ɵcmp = c.Xpm({
              type: E,
              selectors: [["app-add-board-form"]],
              decls: 10,
              vars: 5,
              consts: [
                ["clickOutside", "", 1, "background", 3, "clickOutside"],
                [1, "wrapper"],
                [1, "form", 3, "ngSubmit"],
                ["addBoardForm", "ngForm"],
                [
                  "type",
                  "text",
                  "placeholder",
                  "Board Name",
                  "name",
                  "name",
                  "required",
                  "",
                  "pattern",
                  "^(\\s+\\S+\\s*)*(?!\\s).*$",
                  1,
                  "form__input",
                  3,
                  "ngModel",
                ],
                [
                  "id",
                  "description",
                  "rows",
                  "5",
                  "placeholder",
                  "Description",
                  "name",
                  "description",
                  1,
                  "form__textarea",
                  3,
                  "ngModel",
                  "disabled",
                ],
                ["type", "submit", 1, "form__btn", 3, "disabled"],
                ["type", "button", 1, "form__close", 3, "click"],
              ],
              template: function (I, k) {
                if (1 & I) {
                  const Y = c.EpF();
                  c.TgZ(0, "div", 0),
                    c.NdJ("clickOutside", function () {
                      return k.onCloseAddBoardModal();
                    }),
                    c.TgZ(1, "div", 1)(2, "form", 2, 3),
                    c.NdJ("ngSubmit", function () {
                      c.CHM(Y);
                      const Me = c.MAs(3);
                      return c.KtG(k.onSubmit(Me));
                    }),
                    c._UZ(4, "input", 4)(5, "textarea", 5),
                    c.TgZ(6, "button", 6),
                    c._uU(7),
                    c.qZA(),
                    c.TgZ(8, "button", 7),
                    c.NdJ("click", function () {
                      return k.onCloseAddBoardModal();
                    }),
                    c._uU(9, " X "),
                    c.qZA()()()();
                }
                if (2 & I) {
                  const Y = c.MAs(3);
                  c.xp6(4),
                    c.Q6J("ngModel", k.editDefaultData.name),
                    c.xp6(1),
                    c.Q6J("ngModel", k.editDefaultData.description)(
                      "disabled",
                      k.editMode
                    ),
                    c.xp6(1),
                    c.Q6J("disabled", Y.invalid),
                    c.xp6(1),
                    c.Oqu(k.editMode ? "Edit Board" : "Save Board");
                }
              },
              dependencies: [Q._Y, Q.Fj, Q.JJ, Q.JL, Q.Q7, Q.c5, Q.On, Q.F, Ee],
              styles: [
                ".background[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:55;background-color:#00000080;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;justify-content:center;align-items:center}.wrapper[_ngcontent-%COMP%]{width:90%;max-width:300px;background-color:#e7eaef;padding:20px;border:2px solid #217074;border-radius:10px;position:relative}.form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.form__input[_ngcontent-%COMP%]{padding:5px;margin-bottom:15px;font-family:Open Sans;font-size:1rem;background-color:transparent;color:#000;border:none;border-bottom:2px solid #aaaba8;outline:none}.form__input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#ed413e}.form__textarea[_ngcontent-%COMP%]{padding:5px;margin-bottom:15px;font-family:Open Sans;font-size:1rem;background-color:transparent;color:#000;border:2px solid #aaaba8;outline:none;resize:none;position:relative}.form__textarea[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4}.form__btn[_ngcontent-%COMP%]{padding:5px;font-family:Open Sans;font-size:1.2rem;font-weight:700;letter-spacing:1px;border-radius:10px;background-color:#217074;border:2px solid #217074;color:#e7eaef;cursor:pointer;transition:all .2s linear}.form__btn[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074}.form__btn[_ngcontent-%COMP%]:disabled{background-color:#d2d2d4;border-color:#d2d2d4;color:#fff;cursor:auto}.form__close[_ngcontent-%COMP%]{width:20px;height:20px;font-weight:700;background-color:red;color:#fff;border:none;border-radius:50%;position:absolute;top:5px;right:5px;z-index:1;cursor:pointer;transition:all .2s linear}.form__close[_ngcontent-%COMP%]:hover{transform:translate(2px,-2px)}",
              ],
            })),
            E
          );
        })(),
        Jt = (() => {
          class E {
            constructor(I) {
              this.elementRef = I;
            }
            mouseover(I) {
              this.elementRef.nativeElement.style.backgroundColor = "#D2D2D4";
            }
            mouseleave(I) {
              this.elementRef.nativeElement.style.backgroundColor = "#E7EAEF";
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.Y36(c.SBq));
            }),
            (E.ɵdir = c.lG2({
              type: E,
              selectors: [["", "appBoardHighlight", ""]],
              hostBindings: function (I, k) {
                1 & I &&
                  c.NdJ("mouseenter", function () {
                    return k.mouseover();
                  })("mouseleave", function () {
                    return k.mouseleave();
                  });
              },
            })),
            E
          );
        })();
      function Nt(E, U) {
        1 & E && (c.ynx(0), c._UZ(1, "app-add-board-form"), c.BQk());
      }
      function Ct(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "div", 27)(1, "h4", 28),
            c._uU(2),
            c.qZA(),
            c.TgZ(3, "p", 29),
            c._uU(4),
            c.qZA(),
            c.TgZ(5, "div", 30)(6, "span", 31),
            c._uU(7),
            c.ALo(8, "date"),
            c.qZA(),
            c.TgZ(9, "div", 32)(10, "button", 33)(11, "img", 34),
            c.NdJ("click", function (Y) {
              const Me = c.CHM(I).$implicit;
              return c.oxw().onEditBoard(Me), c.KtG(Y.stopPropagation());
            }),
            c.qZA()(),
            c.TgZ(12, "button", 33)(13, "img", 35),
            c.NdJ("click", function (Y) {
              const Me = c.CHM(I).$implicit;
              return c.oxw().onDeleteBoard(Me._id), c.KtG(Y.stopPropagation());
            }),
            c.qZA()()()(),
            c.TgZ(14, "div", 36)(15, "div", 37),
            c._uU(16),
            c.qZA(),
            c.TgZ(17, "div", 38),
            c._uU(18),
            c.qZA(),
            c.TgZ(19, "div", 39),
            c._uU(20),
            c.qZA()()();
        }
        if (2 & E) {
          const I = U.$implicit;
          c.Q6J("routerLink", I._id),
            c.xp6(2),
            c.Oqu(I.name),
            c.xp6(2),
            c.hij(" ", I.description, " "),
            c.xp6(3),
            c.Oqu(c.xi3(8, 7, I.createdDate, "dd/MM/YYYY")),
            c.xp6(9),
            c.Oqu(I.todoCount),
            c.xp6(2),
            c.Oqu(I.progressCount),
            c.xp6(2),
            c.Oqu(I.doneCount);
        }
      }
      let ut = (() => {
        class E {
          constructor(I, k) {
            (this.formsService = I),
              (this.userDataService = k),
              (this.boards = []),
              (this.sortValue = "createdDate"),
              (this.sortOrder = "asc"),
              (this.showSmallForm = !1);
          }
          ngOnInit() {
            this.userDataService.fetchBoards(),
              (this.boardsSub = this.userDataService
                .getBoardsObs()
                .subscribe((I) => {
                  this.boards = I;
                }));
          }
          onOpenAddBoardModal() {
            this.formsService.openAddBoardForm();
          }
          onDeleteBoard(I) {
            this.userDataService.deleteBoard(I);
          }
          onEditBoard(I) {
            this.formsService.setEditedBoardId(I._id, I.name, I.description);
          }
          onToggleFilterFormShow() {
            this.showSmallForm = !this.showSmallForm;
          }
          ngOnDestroy() {
            this.boardsSub.unsubscribe();
          }
        }
        return (
          (E.ɵfac = function (I) {
            return new (I || E)(c.Y36(we), c.Y36(_e.M));
          }),
          (E.ɵcmp = c.Xpm({
            type: E,
            selectors: [["app-dashboard"]],
            decls: 46,
            vars: 13,
            consts: [
              [4, "ngIf"],
              [1, "content"],
              [1, "content__title"],
              [1, "content__burger", 3, "click"],
              [1, "content__controls", 3, "ngClass"],
              [1, "controls__form"],
              ["controlsForm", "ngForm"],
              [1, "controls__fieldset"],
              ["for", "filter"],
              [
                "type",
                "text",
                "name",
                "filter",
                "id",
                "filter",
                "placeholder",
                "Search...",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["for", "sort"],
              ["name", "sort", "id", "sort", 3, "ngModel", "ngModelChange"],
              ["label", "Board"],
              ["value", "createdDate"],
              ["value", "name"],
              ["label", "Task"],
              ["value", "todoCount"],
              ["value", "progressCount"],
              ["value", "doneCount"],
              ["for", "order"],
              ["name", "order", "id", "order", 3, "ngModel", "ngModelChange"],
              ["value", "asc"],
              ["value", "desc"],
              [1, "dashboard__block"],
              [
                "id",
                "addBoardBtn",
                "appBoardHighlight",
                "",
                1,
                "dashboard__item",
                "dashboard__item--add",
                3,
                "click",
              ],
              [1, ""],
              [
                "class",
                "dashboard__item",
                "appBoardHighlight",
                "",
                3,
                "routerLink",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["appBoardHighlight", "", 1, "dashboard__item", 3, "routerLink"],
              [1, "item__name"],
              [1, "item__description"],
              [1, "item__footer"],
              [1, "item__date"],
              [1, "item__controls"],
              ["type", "button"],
              ["src", "./assets/images/edit.svg", "alt", "Edit", 3, "click"],
              [
                "src",
                "./assets/images/delete.svg",
                "alt",
                "Delete",
                3,
                "click",
              ],
              [1, "item__stats"],
              [1, "item__stat", "item__stat--green"],
              [1, "item__stat", "item__stat--yellow"],
              [1, "item__stat", "item__stat--red"],
            ],
            template: function (I, k) {
              1 & I &&
                (c.YNc(0, Nt, 2, 0, "ng-container", 0),
                c.TgZ(1, "div", 1)(2, "h2", 2),
                c._uU(3, "Dashboard"),
                c.qZA(),
                c.TgZ(4, "button", 3),
                c.NdJ("click", function () {
                  return k.onToggleFilterFormShow();
                }),
                c._uU(5, "Filter/Sort"),
                c.qZA(),
                c.TgZ(6, "div", 4)(7, "form", 5, 6)(9, "fieldset", 7)(
                  10,
                  "label",
                  8
                ),
                c._uU(11, "Filter"),
                c.qZA(),
                c.TgZ(12, "input", 9),
                c.NdJ("ngModelChange", function (Ce) {
                  return (k.searchText = Ce);
                }),
                c.qZA()(),
                c.TgZ(13, "fieldset", 7)(14, "label", 10),
                c._uU(15, "Sort by"),
                c.qZA(),
                c.TgZ(16, "select", 11),
                c.NdJ("ngModelChange", function (Ce) {
                  return (k.sortValue = Ce);
                }),
                c.TgZ(17, "optgroup", 12)(18, "option", 13),
                c._uU(19, "Date"),
                c.qZA(),
                c.TgZ(20, "option", 14),
                c._uU(21, "Name"),
                c.qZA()(),
                c.TgZ(22, "optgroup", 15)(23, "option", 16),
                c._uU(24, "ToDo"),
                c.qZA(),
                c.TgZ(25, "option", 17),
                c._uU(26, "In Progress"),
                c.qZA(),
                c.TgZ(27, "option", 18),
                c._uU(28, "Done"),
                c.qZA()()()(),
                c.TgZ(29, "fieldset", 7)(30, "label", 19),
                c._uU(31, "Order by"),
                c.qZA(),
                c.TgZ(32, "select", 20),
                c.NdJ("ngModelChange", function (Ce) {
                  return (k.sortOrder = Ce);
                }),
                c.TgZ(33, "option", 21),
                c._uU(34, "Ascending"),
                c.qZA(),
                c.TgZ(35, "option", 22),
                c._uU(36, "Descending"),
                c.qZA()()()()()(),
                c.TgZ(37, "div", 23)(38, "div", 24),
                c.NdJ("click", function () {
                  return k.onOpenAddBoardModal();
                }),
                c.TgZ(39, "span", 25),
                c._uU(40, "+"),
                c.qZA(),
                c.TgZ(41, "p"),
                c._uU(42, "Add new"),
                c.qZA()(),
                c.YNc(43, Ct, 21, 10, "div", 26),
                c.ALo(44, "sorting"),
                c.ALo(45, "filtering"),
                c.qZA()),
                2 & I &&
                  (c.Q6J("ngIf", k.formsService.showAddBoardForm),
                  c.xp6(6),
                  c.Q6J("ngClass", k.showSmallForm ? "show" : ""),
                  c.xp6(6),
                  c.Q6J("ngModel", k.searchText),
                  c.xp6(4),
                  c.Q6J("ngModel", k.sortValue),
                  c.xp6(16),
                  c.Q6J("ngModel", k.sortOrder),
                  c.xp6(11),
                  c.Q6J(
                    "ngForOf",
                    c.Dn7(
                      44,
                      6,
                      c.xi3(45, 10, k.boards, k.searchText),
                      k.sortValue,
                      k.sortOrder
                    )
                  ));
            },
            dependencies: [
              f.mk,
              f.sg,
              f.O5,
              X.rH,
              Q._Y,
              Q.YN,
              Q.Kr,
              Q.Fj,
              Q.EJ,
              Q.JJ,
              Q.JL,
              Q.On,
              Q.F,
              yt,
              Jt,
              f.uU,
              W,
              oe,
            ],
            styles: [
              ".content[_ngcontent-%COMP%]{margin-bottom:5px;display:flex;justify-content:space-between;align-items:center}.content__title[_ngcontent-%COMP%]{padding-top:20px;margin-bottom:20px}.content__burger[_ngcontent-%COMP%]{display:none;padding:7px 10px;font-size:1.2rem;background-color:#217074;color:#e7eaef;border:2px solid #E7EAEF;border-radius:10px;cursor:pointer;transition:all .1s linear}.content__burger[_ngcontent-%COMP%]:hover{background-color:#e7eaef;color:#217074;border-color:#217074}.controls__form[_ngcontent-%COMP%]{display:flex;gap:10px}.controls__fieldset[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:none}.controls__fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:2px;font-size:.9rem;line-height:1;font-weight:700}.controls__fieldset[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .controls__fieldset[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:150px;padding:5px;font-family:Open Sans;font-size:1rem;font-weight:600;line-height:1;color:#000;border:2px solid #AAABA8;border-radius:5px;outline:none}.dashboard__block[_ngcontent-%COMP%]{padding-bottom:20px;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:20px}.dashboard__item[_ngcontent-%COMP%]{padding:20px 20px 40px;height:250px;background-color:#e7eaef;box-shadow:2px 2px 5px #aaaba8;border-radius:10px;position:relative;cursor:pointer;transition:all .1s linear;overflow:hidden}.dashboard__item--add[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.dashboard__item--add[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:7rem;line-height:1}.dashboard__item--add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2rem}.item__name[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.2rem}.item__description[_ngcontent-%COMP%]{font-size:1rem}.item__footer[_ngcontent-%COMP%]{width:calc(100% - 40px);display:flex;justify-content:space-between;align-items:center;position:absolute;left:20px;bottom:30px;z-index:1}.item__controls[_ngcontent-%COMP%]{display:flex;transition:all .1s linear}.item__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;background-color:transparent;border-radius:50%;border:none;cursor:pointer;transition:all .1s linear}.item__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.item__controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#e7eaef}.item__date[_ngcontent-%COMP%]{font-size:.8rem;color:#217074}.item__stats[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);border-top:2px solid #AAABA8;position:absolute;bottom:0;left:0;z-index:1}.item__stat[_ngcontent-%COMP%]{padding:3px 0;font-size:1rem;line-height:1;font-weight:700;color:#fff;text-align:center}.item__stat--green[_ngcontent-%COMP%]{color:#217074}.item__stat--yellow[_ngcontent-%COMP%]{color:#ec9704}.item__stat--red[_ngcontent-%COMP%]{color:#ed413e}@media (max-width: 1199.98px){.dashboard__block[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media (max-width: 991.98px){.dashboard__block[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 767.98px){.dashboard__block[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.dashboard__item[_ngcontent-%COMP%]{height:225px}.content[_ngcontent-%COMP%]{margin-bottom:20px;flex-direction:column}.content__title[_ngcontent-%COMP%]{padding-top:10px;margin-bottom:10px}}@media (max-width: 575.98px){.dashboard__block[_ngcontent-%COMP%]{grid-template-columns:1fr}.content[_ngcontent-%COMP%]{margin-bottom:10px;width:100%;flex-direction:row;align-items:center;position:relative}.content__burger[_ngcontent-%COMP%]{display:block}.content__controls[_ngcontent-%COMP%]{padding:10px;display:none;position:absolute;top:100%;right:0;z-index:5;background-color:#217074;color:#fff;border-radius:5px}.content__controls.show[_ngcontent-%COMP%]{display:block}.controls__form[_ngcontent-%COMP%]{flex-direction:column}}",
            ],
          })),
          E
        );
      })();
      var tt = x(5698),
        $n = x(4004),
        Gn = x(7998);
      function Mt(E, U) {
        if (1 & E) {
          const I = c.EpF();
          c.TgZ(0, "a", 5),
            c.NdJ("click", function () {
              c.CHM(I);
              const Y = c.oxw();
              return c.KtG(Y.onClearArchive());
            }),
            c._uU(1, " Clear archive "),
            c._UZ(2, "img", 6),
            c.qZA();
        }
      }
      function An(E, U) {
        1 & E &&
          (c.TgZ(0, "p", 7), c._uU(1, "No archived tasks found!"), c.qZA());
      }
      function sn(E, U) {
        if ((1 & E && (c.TgZ(0, "li", 14), c._uU(1), c.qZA()), 2 & E)) {
          const I = U.$implicit;
          c.xp6(1), c.Oqu(I.name);
        }
      }
      function Xt(E, U) {
        if (
          (1 & E &&
            (c.TgZ(0, "div", 10)(1, "h2", 11),
            c._uU(2),
            c.qZA(),
            c.TgZ(3, "ul", 12),
            c.YNc(4, sn, 2, 1, "li", 13),
            c.qZA()()),
          2 & E)
        ) {
          const I = c.oxw().$implicit;
          c.xp6(2), c.Oqu(I.name), c.xp6(2), c.Q6J("ngForOf", I.archive);
        }
      }
      function Tn(E, U) {
        if (
          (1 & E &&
            (c.TgZ(0, "article", 8), c.YNc(1, Xt, 5, 2, "div", 9), c.qZA()),
          2 & E)
        ) {
          const I = U.$implicit;
          c.xp6(1), c.Q6J("ngIf", I.archive.length);
        }
      }
      const an = [
        {
          path: "",
          canActivate: [
            (() => {
              class E {
                constructor(I, k) {
                  (this.authService = I), (this.router = k);
                }
                canActivate(I, k) {
                  return this.authService.user.pipe(
                    (0, tt.q)(1),
                    (0, $n.U)(
                      (Y) => !!Y || this.router.createUrlTree(["/auth"])
                    )
                  );
                }
              }
              return (
                (E.ɵfac = function (I) {
                  return new (I || E)(c.LFG(Gn.e), c.LFG(X.F0));
                }),
                (E.ɵprov = c.Yz7({
                  token: E,
                  factory: E.ɵfac,
                  providedIn: "root",
                })),
                E
              );
            })(),
          ],
          children: [
            { path: "", component: ut },
            {
              path: "archive",
              component: (() => {
                class E {
                  constructor(I) {
                    (this.userDataService = I),
                      (this.boards = []),
                      (this.archiveTasks = []),
                      (this.showDelBtn = !0);
                  }
                  ngOnInit() {
                    this.userDataService.fetchBoards(),
                      (this.boardsSub = this.userDataService
                        .getBoardsObs()
                        .subscribe((I) => {
                          (this.boards = I),
                            (this.showDelBtn = !I.every(
                              (k) => 0 === k.archive.length
                            ));
                        }));
                  }
                  onClearArchive() {
                    this.userDataService.clearArchive();
                  }
                  ngOnDestroy() {
                    this.boardsSub.unsubscribe();
                  }
                }
                return (
                  (E.ɵfac = function (I) {
                    return new (I || E)(c.Y36(_e.M));
                  }),
                  (E.ɵcmp = c.Xpm({
                    type: E,
                    selectors: [["app-archive"]],
                    decls: 6,
                    vars: 3,
                    consts: [
                      [1, "header"],
                      [1, "header__title"],
                      ["class", "header__btn", 3, "click", 4, "ngIf"],
                      ["class", "message", 4, "ngIf"],
                      ["class", "archive", 4, "ngFor", "ngForOf"],
                      [1, "header__btn", 3, "click"],
                      ["src", "./assets/images/delete.svg", "alt", "Delete"],
                      [1, "message"],
                      [1, "archive"],
                      ["class", "archive__block", 4, "ngIf"],
                      [1, "archive__block"],
                      [1, "archive__title"],
                      [1, "archive__list"],
                      ["class", "archive__task", 4, "ngFor", "ngForOf"],
                      [1, "archive__task"],
                    ],
                    template: function (I, k) {
                      1 & I &&
                        (c.TgZ(0, "div", 0)(1, "h2", 1),
                        c._uU(2, "Archive"),
                        c.qZA(),
                        c.YNc(3, Mt, 3, 0, "a", 2),
                        c.qZA(),
                        c.YNc(4, An, 2, 0, "p", 3),
                        c.YNc(5, Tn, 2, 1, "article", 4)),
                        2 & I &&
                          (c.xp6(3),
                          c.Q6J("ngIf", k.showDelBtn),
                          c.xp6(1),
                          c.Q6J("ngIf", !k.showDelBtn),
                          c.xp6(1),
                          c.Q6J("ngForOf", k.boards));
                    },
                    dependencies: [f.sg, f.O5],
                    styles: [
                      ".header[_ngcontent-%COMP%]{padding:20px 0;display:flex;justify-content:space-between;align-items:center}.header__btn[_ngcontent-%COMP%]{font-size:1rem;line-height:1;font-weight:600;color:#217074;transition:all .1s linear;cursor:pointer}.header__btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1rem;height:1rem}.header__btn[_ngcontent-%COMP%]:hover{opacity:.7}.message[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1;font-weight:600;text-decoration:underline;text-align:center}.archive[_ngcontent-%COMP%]{padding:0 0 10px;text-align:center}.archive__block[_ngcontent-%COMP%]{margin-bottom:10px}.archive__title[_ngcontent-%COMP%]{margin-bottom:5px}.archive__list[_ngcontent-%COMP%]{list-style:none}.archive__task[_ngcontent-%COMP%]{margin:0 auto 5px;padding:10px;width:100%;max-width:300px;font-size:1rem;line-height:1;text-align-last:left;background-color:#d2d2d4}",
                    ],
                  })),
                  E
                );
              })(),
            },
            { path: ":id", component: qt },
          ],
        },
      ];
      let Rt = (() => {
        class E {}
        return (
          (E.ɵfac = function (I) {
            return new (I || E)();
          }),
          (E.ɵmod = c.oAB({ type: E })),
          (E.ɵinj = c.cJS({ imports: [X.Bz.forChild(an), X.Bz] })),
          E
        );
      })();
      var Ut = x(6978),
        _n = x(4482),
        ir = x(5403);
      function kt(E, U) {
        return U
          ? (I) =>
              I.pipe(
                kt((k, Y) =>
                  (0, se.Xf)(E(k, Y)).pipe(
                    (0, $n.U)((Ce, Me) => U(k, Ce, Y, Me))
                  )
                )
              )
          : (0, _n.e)((I, k) => {
              let Y = 0,
                Ce = null,
                Me = !1;
              I.subscribe(
                (0, ir.x)(
                  k,
                  (pt) => {
                    Ce ||
                      ((Ce = (0, ir.x)(k, void 0, () => {
                        (Ce = null), Me && k.complete();
                      })),
                      (0, se.Xf)(E(pt, Y++)).subscribe(Ce));
                  },
                  () => {
                    (Me = !0), !Ce && k.complete();
                  }
                )
              );
            });
      }
      let pe = (() => {
          class E {
            constructor(I) {
              this.authService = I;
            }
            intercept(I, k) {
              return this.authService.user.pipe(
                (0, tt.q)(1),
                kt((Y) => {
                  const Ce = I.clone({
                    headers: new Z.WM({
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${Y?.token}`,
                    }),
                  });
                  return k.handle(Ce);
                })
              );
            }
          }
          return (
            (E.ɵfac = function (I) {
              return new (I || E)(c.LFG(Gn.e));
            }),
            (E.ɵprov = c.Yz7({ token: E, factory: E.ɵfac })),
            E
          );
        })(),
        N = (() => {
          class E {}
          return (
            (E.ɵfac = function (I) {
              return new (I || E)();
            }),
            (E.ɵmod = c.oAB({ type: E })),
            (E.ɵinj = c.cJS({
              providers: [{ provide: Z.TP, useClass: pe, multi: !0 }],
              imports: [f.ez, Z.JF, Rt, Q.u5, w.m, Ut.AuthModule],
            })),
            E
          );
        })();
    },
    8541: (Ze, me, x) => {
      x.d(me, { M: () => c });
      var f = x(1135),
        w = x(2340),
        Z = x(8256),
        X = x(529);
      let c = (() => {
        class we {
          constructor(Q) {
            (this.http = Q),
              (this.boardsGeted = !1),
              (this.boards = new f.X([]));
          }
          getBoardsObs() {
            return this.boards;
          }
          getBoards() {
            return this.boards.getValue();
          }
          setBoards(Q) {
            this.boards.next(Q);
          }
          clearBoardsRequestState() {
            this.boardsGeted = !1;
          }
          addBoard(Q, se) {
            this.http
              .post(`${w.N.SERVER_URL}/api/board`, { name: Q, description: se })
              .subscribe((ie) => {
                const G = [...this.getBoards(), ie];
                this.setBoards(G);
              });
          }
          fetchBoards() {
            this.boardsGeted ||
              this.http.get(`${w.N.SERVER_URL}/api/board`).subscribe((Q) => {
                this.setBoards(Q), (this.boardsGeted = !0);
              });
          }
          deleteBoard(Q) {
            confirm("Do you want to delete this Board?") &&
              this.http
                .delete(`${w.N.SERVER_URL}/api/board/${Q}`)
                .subscribe(() => {
                  let se = this.getBoards();
                  const ie = se.findIndex((G) => G._id === Q);
                  se.splice(ie, 1), this.setBoards(se);
                });
          }
          editBoard(Q, se) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/${Q}`, { name: se })
              .subscribe(() => {
                let ie = this.getBoards().map((G) =>
                  G._id === Q ? { ...G, name: se } : G
                );
                this.setBoards(ie);
              });
          }
          setBoardColor(Q, se, ie) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/setcolor/${Q}`, {
                newColor: ie,
                columnStatus: se,
              })
              .subscribe((G) => {
                let he = this.getBoards().map((Ae) => (Ae._id === Q ? G : Ae));
                this.setBoards(he);
              });
          }
          addTask(Q, se, ie) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/task/${Q}`, {
                name: se,
                status: ie,
              })
              .subscribe((G) => {
                let he = this.getBoards().map((Ae) => (Ae._id === Q ? G : Ae));
                this.setBoards(he);
              });
          }
          deleteTask(Q, se) {
            confirm("Do you want to delete this Task?") &&
              this.http
                .delete(`${w.N.SERVER_URL}/api/board/task/${Q}`, {
                  body: { taskId: se },
                })
                .subscribe((ie) => {
                  let G = this.getBoards().map((he) =>
                    he._id === Q ? ie : he
                  );
                  this.setBoards(G);
                });
          }
          editTask(Q, se, ie, G) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/task/edit/${Q}`, {
                name: ie,
                status: G,
                taskId: se,
              })
              .subscribe((he) => {
                let Ae = this.getBoards().map((le) => (le._id === Q ? he : le));
                this.setBoards(Ae);
              });
          }
          changeTaskStatus(Q, se, ie) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/task/status/${Q}`, {
                status: ie,
                taskId: se,
              })
              .subscribe((G) => {
                let he = this.getBoards().map((Ae) => (Ae._id === Q ? G : Ae));
                this.setBoards(he);
              });
          }
          addTaskComment(Q, se, ie) {
            this.http
              .put(`${w.N.SERVER_URL}/api/board/task/comment/${Q}`, {
                comment: ie,
                taskId: se,
              })
              .subscribe();
          }
          deleteTaskComment(Q, se, ie) {
            confirm("Do you want to delete this Comment?") &&
              this.http
                .delete(`${w.N.SERVER_URL}/api/board/task/comment/${Q}`, {
                  body: { commentIndex: ie, taskId: se },
                })
                .subscribe();
          }
          archiveTask(Q, se) {
            confirm("Do you want to remove this Task to archive?") &&
              this.http
                .delete(`${w.N.SERVER_URL}/api/board/task/archive/${Q}`, {
                  body: { taskId: se },
                })
                .subscribe((ie) => {
                  let G = this.getBoards().map((he) =>
                    he._id === Q ? ie : he
                  );
                  this.setBoards(G);
                });
          }
          clearArchive() {
            confirm("Do you want to Clear Archive?") &&
              this.http
                .put(`${w.N.SERVER_URL}/api/board/archive/clear`, {})
                .subscribe(() => {
                  const Q = this.getBoards().map((se) => ({
                    ...se,
                    archive: [],
                  }));
                  this.setBoards(Q);
                });
          }
        }
        return (
          (we.ɵfac = function (Q) {
            return new (Q || we)(Z.LFG(X.eN));
          }),
          (we.ɵprov = Z.Yz7({
            token: we,
            factory: we.ɵfac,
            providedIn: "root",
          })),
          we
        );
      })();
    },
    4466: (Ze, me, x) => {
      x.d(me, { m: () => Z });
      var f = x(6895),
        w = x(8256);
      let Z = (() => {
        class X {}
        return (
          (X.ɵfac = function (we) {
            return new (we || X)();
          }),
          (X.ɵmod = w.oAB({ type: X })),
          (X.ɵinj = w.cJS({ imports: [f.ez] })),
          X
        );
      })();
    },
    2340: (Ze, me, x) => {
      x.d(me, { N: () => f });
      const f = { production: !0, SERVER_URL: "http://localhost:8080" };
    },
    9299: (Ze, me, x) => {
      var f = x(1481),
        w = x(8256),
        Z = x(529),
        X = x(3841);
      const c = [
        { path: "", redirectTo: "dashboard", pathMatch: "full" },
        {
          path: "auth",
          loadChildren: () =>
            Promise.resolve()
              .then(x.bind(x, 6978))
              .then((H) => H.AuthModule),
        },
        {
          path: "dashboard",
          loadChildren: () =>
            Promise.resolve()
              .then(x.bind(x, 2558))
              .then((H) => H.FeaturesModule),
        },
      ];
      let we = (() => {
        class H {}
        return (
          (H.ɵfac = function (Ee) {
            return new (Ee || H)();
          }),
          (H.ɵmod = w.oAB({ type: H })),
          (H.ɵinj = w.cJS({ imports: [X.Bz.forRoot(c), X.Bz] })),
          H
        );
      })();
      var _e = x(7998),
        Q = x(8541),
        se = x(6895);
      function ie(H, K) {
        if (1 & H) {
          const Ee = w.EpF();
          w.TgZ(0, "div", 10),
            w.NdJ("click", function () {
              w.CHM(Ee);
              const ae = w.oxw();
              return w.KtG(ae.onToggleNavigation());
            }),
            w._UZ(1, "div"),
            w.qZA();
        }
      }
      const G = function () {
        return { exact: !0 };
      };
      function he(H, K) {
        if (1 & H) {
          const Ee = w.EpF();
          w.TgZ(0, "a", 11),
            w.NdJ("click", function () {
              w.CHM(Ee);
              const ae = w.oxw();
              return w.KtG((ae.showNavigation = !1));
            }),
            w._uU(1, "Dashboard"),
            w.qZA();
        }
        2 & H && w.Q6J("routerLinkActiveOptions", w.DdM(1, G));
      }
      function Ae(H, K) {
        if (1 & H) {
          const Ee = w.EpF();
          w.TgZ(0, "a", 12),
            w.NdJ("click", function () {
              w.CHM(Ee);
              const ae = w.oxw();
              return w.KtG((ae.showNavigation = !1));
            }),
            w._uU(1, "Archive"),
            w.qZA();
        }
        2 & H && w.Q6J("routerLinkActiveOptions", w.DdM(1, G));
      }
      function le(H, K) {
        if (1 & H) {
          const Ee = w.EpF();
          w.TgZ(0, "button", 13),
            w.NdJ("click", function () {
              w.CHM(Ee);
              const ae = w.oxw();
              return w.KtG(ae.onLogout());
            }),
            w._uU(1, " Logout "),
            w.qZA();
        }
      }
      let Oe = (() => {
          class H {
            constructor(Ee, ne) {
              (this.authService = Ee),
                (this.userDataService = ne),
                (this.isAuth = !1),
                (this.showNavigation = !1);
            }
            ngOnInit() {
              this.userSub = this.authService.user.subscribe((Ee) => {
                (this.isAuth = !!Ee), (this.userName = Ee?.login);
              });
            }
            onLogout() {
              confirm("Do you really want to Logout?") &&
                (this.authService.logout(),
                this.userDataService.clearBoardsRequestState());
            }
            onToggleNavigation() {
              this.showNavigation = !this.showNavigation;
            }
            ngOnDestroy() {
              this.userSub.unsubscribe();
            }
          }
          return (
            (H.ɵfac = function (Ee) {
              return new (Ee || H)(w.Y36(_e.e), w.Y36(Q.M));
            }),
            (H.ɵcmp = w.Xpm({
              type: H,
              selectors: [["app-header"]],
              decls: 12,
              vars: 6,
              consts: [
                [1, "header"],
                [1, "container"],
                [1, "header__inner"],
                [1, "header__logo"],
                ["class", "header__burger", 3, "click", 4, "ngIf"],
                [1, "header__buttons", 3, "ngClass"],
                [
                  "class",
                  "header__link",
                  "routerLink",
                  "/dashboard",
                  "routerLinkActive",
                  "active",
                  3,
                  "routerLinkActiveOptions",
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "class",
                  "header__link",
                  "routerLink",
                  "/dashboard/archive",
                  "routerLinkActive",
                  "active",
                  3,
                  "routerLinkActiveOptions",
                  "click",
                  4,
                  "ngIf",
                ],
                [1, "header__username"],
                ["class", "header__btn", 3, "click", 4, "ngIf"],
                [1, "header__burger", 3, "click"],
                [
                  "routerLink",
                  "/dashboard",
                  "routerLinkActive",
                  "active",
                  1,
                  "header__link",
                  3,
                  "routerLinkActiveOptions",
                  "click",
                ],
                [
                  "routerLink",
                  "/dashboard/archive",
                  "routerLinkActive",
                  "active",
                  1,
                  "header__link",
                  3,
                  "routerLinkActiveOptions",
                  "click",
                ],
                [1, "header__btn", 3, "click"],
              ],
              template: function (Ee, ne) {
                1 & Ee &&
                  (w.TgZ(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
                  w._uU(4, "Task Control"),
                  w.qZA(),
                  w.YNc(5, ie, 2, 0, "div", 4),
                  w.TgZ(6, "div", 5),
                  w.YNc(7, he, 2, 2, "a", 6),
                  w.YNc(8, Ae, 2, 2, "a", 7),
                  w.qZA(),
                  w.TgZ(9, "p", 8),
                  w._uU(10),
                  w.qZA(),
                  w.YNc(11, le, 2, 0, "button", 9),
                  w.qZA()()()),
                  2 & Ee &&
                    (w.xp6(5),
                    w.Q6J("ngIf", ne.isAuth),
                    w.xp6(1),
                    w.Q6J("ngClass", ne.showNavigation ? "show" : ""),
                    w.xp6(1),
                    w.Q6J("ngIf", ne.isAuth),
                    w.xp6(1),
                    w.Q6J("ngIf", ne.isAuth),
                    w.xp6(2),
                    w.Oqu(ne.userName),
                    w.xp6(1),
                    w.Q6J("ngIf", ne.isAuth));
              },
              dependencies: [se.mk, se.O5, X.yS, X.Od],
              styles: [
                '.header[_ngcontent-%COMP%]{position:fixed;z-index:50;width:100%;background-color:#217074;color:#fff}.header__inner[_ngcontent-%COMP%]{height:80px;display:flex;justify-content:space-between;align-items:center}.header__logo[_ngcontent-%COMP%]{line-height:1.2}.header__buttons[_ngcontent-%COMP%]{margin-left:50px;margin-right:auto;display:flex;gap:25px}.header__link[_ngcontent-%COMP%]{padding:5px 10px;font-size:1.3rem;line-height:1.5;color:#fff;border-radius:10px;text-decoration:none;cursor:pointer}.header__link[_ngcontent-%COMP%]:hover{text-decoration:underline}.header__username[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:20px}.header__btn[_ngcontent-%COMP%]{padding:10px 15px;height:46px;font-family:Open Sans;font-size:1.2rem;line-height:1;background-color:#e7eaef;color:#217074;border:2px solid #217074;border-radius:10px;cursor:pointer;transition:all .2s linear}.header__btn[_ngcontent-%COMP%]:hover{background-color:#217074;color:#e7eaef;border:2px solid #e7eaef}.header__burger[_ngcontent-%COMP%]{display:none;width:34px;height:34px;justify-content:center;align-items:center;border:2px solid #217074;border-radius:5px;background-color:#e7eaef;transition:all .1s linear;cursor:pointer}.header__burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:24px;height:3px;background-color:#217074}.header__burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .header__burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:"";width:24px;height:3px;background-color:#217074;position:absolute;left:50%;z-index:1;transform:translate(-50%)}.header__burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before{top:-7px}.header__burger[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{top:7px}.header__burger[_ngcontent-%COMP%]:hover{background-color:#217074;border-color:#e7eaef}.header__burger[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%], .header__burger[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:before, .header__burger[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:after{background-color:#e7eaef}.active[_ngcontent-%COMP%]{background-color:#e7eaef33}@media (max-width: 767.98px){.header__inner[_ngcontent-%COMP%]{height:60px}.header__logo[_ngcontent-%COMP%]{font-size:1.5rem}.header__buttons[_ngcontent-%COMP%]{margin:0}.header__username[_ngcontent-%COMP%]{display:none}.header__btn[_ngcontent-%COMP%]{font-size:1rem}.header__link[_ngcontent-%COMP%]{font-size:1.2rem}}@media (max-width: 575.98px){.header__inner[_ngcontent-%COMP%]{align-items:center}.header__btn[_ngcontent-%COMP%]{padding:5px 10px}.header__burger[_ngcontent-%COMP%]{display:flex}.header__buttons[_ngcontent-%COMP%]{display:none;padding:10px;justify-content:center;align-items:center;position:absolute;width:100%;top:59px;left:0;z-index:1;background-color:#217074}.header__buttons.show[_ngcontent-%COMP%]{display:flex}}@media (max-width: 429.98px){.header__logo[_ngcontent-%COMP%]{font-size:1.2rem}}',
              ],
            })),
            H
          );
        })(),
        Re = (() => {
          class H {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (H.ɵfac = function (Ee) {
              return new (Ee || H)();
            }),
            (H.ɵcmp = w.Xpm({
              type: H,
              selectors: [["app-footer"]],
              decls: 6,
              vars: 0,
              consts: [
                [1, "footer"],
                [1, "container"],
                [1, "footer__inner"],
                [1, "footer__text"],
                [
                  "src",
                  "./assets/images/angular.svg",
                  "alt",
                  "Angular",
                  1,
                  "footer__logo",
                ],
              ],
              template: function (Ee, ne) {
                1 & Ee &&
                  (w.TgZ(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3),
                  w._uU(
                    4,
                    " \xa9 2022 EPAM Lab Homework - Task Control Application "
                  ),
                  w.qZA(),
                  w._UZ(5, "img", 4),
                  w.qZA()()());
              },
              styles: [
                ".footer[_ngcontent-%COMP%]{padding:10px 0;background-color:#217074}.footer__inner[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.footer__text[_ngcontent-%COMP%]{color:#fff}.footer__logo[_ngcontent-%COMP%]{margin-left:5px;width:25px;height:25px}@media (max-width: 575.98px){.footer__text[_ngcontent-%COMP%]{font-size:.8rem;text-align:center}.footer__logo[_ngcontent-%COMP%]{width:20px}}@media (max-width: 429.98px){.footer__text[_ngcontent-%COMP%]{font-size:1rem}.footer__logo[_ngcontent-%COMP%]{display:none}}",
              ],
              changeDetection: 0,
            })),
            H
          );
        })(),
        Ue = (() => {
          class H {
            constructor(Ee) {
              this.authService = Ee;
            }
            ngOnInit() {
              this.authService.autoLogin();
            }
          }
          return (
            (H.ɵfac = function (Ee) {
              return new (Ee || H)(w.Y36(_e.e));
            }),
            (H.ɵcmp = w.Xpm({
              type: H,
              selectors: [["app-root"]],
              decls: 5,
              vars: 0,
              consts: [
                [1, "container"],
                [1, "main"],
              ],
              template: function (Ee, ne) {
                1 & Ee &&
                  (w._UZ(0, "app-header"),
                  w.TgZ(1, "div", 0)(2, "main", 1),
                  w._UZ(3, "router-outlet"),
                  w.qZA()(),
                  w._UZ(4, "app-footer"));
              },
              dependencies: [X.lC, Oe, Re],
              styles: [
                ".main[_ngcontent-%COMP%]{padding-top:80px;width:100%;min-height:calc(100vh - 45px)}@media (max-width: 767.98px){.main[_ngcontent-%COMP%]{padding-top:60px}}@media (max-width: 429.98px){.main[_ngcontent-%COMP%]{min-height:calc(100vh - 64px)}}",
              ],
            })),
            H
          );
        })();
      var je = x(2558);
      let ht = (() => {
          class H {}
          return (
            (H.ɵfac = function (Ee) {
              return new (Ee || H)();
            }),
            (H.ɵmod = w.oAB({ type: H })),
            (H.ɵinj = w.cJS({ imports: [se.ez, we, je.FeaturesModule] })),
            H
          );
        })(),
        ce = (() => {
          class H {}
          return (
            (H.ɵfac = function (Ee) {
              return new (Ee || H)();
            }),
            (H.ɵmod = w.oAB({ type: H, bootstrap: [Ue] })),
            (H.ɵinj = w.cJS({ imports: [f.b2, we, ht, Z.JF] })),
            H
          );
        })();
      x(2340).N.production && (0, w.G48)(),
        f
          .q6()
          .bootstrapModule(ce)
          .catch((H) => console.error(H));
    },
    1135: (Ze, me, x) => {
      x.d(me, { X: () => w });
      var f = x(7579);
      class w extends f.x {
        constructor(X) {
          super(), (this._value = X);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(X) {
          const c = super._subscribe(X);
          return !c.closed && X.next(this._value), c;
        }
        getValue() {
          const { hasError: X, thrownError: c, _value: we } = this;
          if (X) throw c;
          return this._throwIfClosed(), we;
        }
        next(X) {
          super.next((this._value = X));
        }
      }
    },
    9751: (Ze, me, x) => {
      x.d(me, { y: () => Q });
      var f = x(2961),
        w = x(727),
        Z = x(8822),
        X = x(9635),
        c = x(2416),
        we = x(576),
        _e = x(2806);
      let Q = (() => {
        class he {
          constructor(le) {
            le && (this._subscribe = le);
          }
          lift(le) {
            const Oe = new he();
            return (Oe.source = this), (Oe.operator = le), Oe;
          }
          subscribe(le, Oe, Re) {
            const Ue = (function G(he) {
              return (
                (he && he instanceof f.Lv) ||
                ((function ie(he) {
                  return (
                    he &&
                    (0, we.m)(he.next) &&
                    (0, we.m)(he.error) &&
                    (0, we.m)(he.complete)
                  );
                })(he) &&
                  (0, w.Nn)(he))
              );
            })(le)
              ? le
              : new f.Hp(le, Oe, Re);
            return (
              (0, _e.x)(() => {
                const { operator: je, source: ht } = this;
                Ue.add(
                  je
                    ? je.call(Ue, ht)
                    : ht
                    ? this._subscribe(Ue)
                    : this._trySubscribe(Ue)
                );
              }),
              Ue
            );
          }
          _trySubscribe(le) {
            try {
              return this._subscribe(le);
            } catch (Oe) {
              le.error(Oe);
            }
          }
          forEach(le, Oe) {
            return new (Oe = se(Oe))((Re, Ue) => {
              const je = new f.Hp({
                next: (ht) => {
                  try {
                    le(ht);
                  } catch (ce) {
                    Ue(ce), je.unsubscribe();
                  }
                },
                error: Ue,
                complete: Re,
              });
              this.subscribe(je);
            });
          }
          _subscribe(le) {
            var Oe;
            return null === (Oe = this.source) || void 0 === Oe
              ? void 0
              : Oe.subscribe(le);
          }
          [Z.L]() {
            return this;
          }
          pipe(...le) {
            return (0, X.U)(le)(this);
          }
          toPromise(le) {
            return new (le = se(le))((Oe, Re) => {
              let Ue;
              this.subscribe(
                (je) => (Ue = je),
                (je) => Re(je),
                () => Oe(Ue)
              );
            });
          }
        }
        return (he.create = (Ae) => new he(Ae)), he;
      })();
      function se(he) {
        var Ae;
        return null !== (Ae = he ?? c.v.Promise) && void 0 !== Ae
          ? Ae
          : Promise;
      }
    },
    7579: (Ze, me, x) => {
      x.d(me, { x: () => _e });
      var f = x(9751),
        w = x(727);
      const X = (0, x(3888).d)(
        (se) =>
          function () {
            se(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var c = x(8737),
        we = x(2806);
      let _e = (() => {
        class se extends f.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(G) {
            const he = new Q(this, this);
            return (he.operator = G), he;
          }
          _throwIfClosed() {
            if (this.closed) throw new X();
          }
          next(G) {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const he of this.currentObservers) he.next(G);
              }
            });
          }
          error(G) {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = G);
                const { observers: he } = this;
                for (; he.length; ) he.shift().error(G);
              }
            });
          }
          complete() {
            (0, we.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: G } = this;
                for (; G.length; ) G.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var G;
            return (
              (null === (G = this.observers) || void 0 === G
                ? void 0
                : G.length) > 0
            );
          }
          _trySubscribe(G) {
            return this._throwIfClosed(), super._trySubscribe(G);
          }
          _subscribe(G) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(G),
              this._innerSubscribe(G)
            );
          }
          _innerSubscribe(G) {
            const { hasError: he, isStopped: Ae, observers: le } = this;
            return he || Ae
              ? w.Lc
              : ((this.currentObservers = null),
                le.push(G),
                new w.w0(() => {
                  (this.currentObservers = null), (0, c.P)(le, G);
                }));
          }
          _checkFinalizedStatuses(G) {
            const { hasError: he, thrownError: Ae, isStopped: le } = this;
            he ? G.error(Ae) : le && G.complete();
          }
          asObservable() {
            const G = new f.y();
            return (G.source = this), G;
          }
        }
        return (se.create = (ie, G) => new Q(ie, G)), se;
      })();
      class Q extends _e {
        constructor(ie, G) {
          super(), (this.destination = ie), (this.source = G);
        }
        next(ie) {
          var G, he;
          null ===
            (he =
              null === (G = this.destination) || void 0 === G
                ? void 0
                : G.next) ||
            void 0 === he ||
            he.call(G, ie);
        }
        error(ie) {
          var G, he;
          null ===
            (he =
              null === (G = this.destination) || void 0 === G
                ? void 0
                : G.error) ||
            void 0 === he ||
            he.call(G, ie);
        }
        complete() {
          var ie, G;
          null ===
            (G =
              null === (ie = this.destination) || void 0 === ie
                ? void 0
                : ie.complete) ||
            void 0 === G ||
            G.call(ie);
        }
        _subscribe(ie) {
          var G, he;
          return null !==
            (he =
              null === (G = this.source) || void 0 === G
                ? void 0
                : G.subscribe(ie)) && void 0 !== he
            ? he
            : w.Lc;
        }
      }
    },
    2961: (Ze, me, x) => {
      x.d(me, { Hp: () => Re, Lv: () => he });
      var f = x(576),
        w = x(727),
        Z = x(2416),
        X = x(7849);
      function c() {}
      const we = se("C", void 0, void 0);
      function se(De, H, K) {
        return { kind: De, value: H, error: K };
      }
      var ie = x(3410),
        G = x(2806);
      class he extends w.w0 {
        constructor(H) {
          super(),
            (this.isStopped = !1),
            H
              ? ((this.destination = H), (0, w.Nn)(H) && H.add(this))
              : (this.destination = ce);
        }
        static create(H, K, Ee) {
          return new Re(H, K, Ee);
        }
        next(H) {
          this.isStopped
            ? ht(
                (function Q(De) {
                  return se("N", De, void 0);
                })(H),
                this
              )
            : this._next(H);
        }
        error(H) {
          this.isStopped
            ? ht(
                (function _e(De) {
                  return se("E", void 0, De);
                })(H),
                this
              )
            : ((this.isStopped = !0), this._error(H));
        }
        complete() {
          this.isStopped
            ? ht(we, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(H) {
          this.destination.next(H);
        }
        _error(H) {
          try {
            this.destination.error(H);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const Ae = Function.prototype.bind;
      function le(De, H) {
        return Ae.call(De, H);
      }
      class Oe {
        constructor(H) {
          this.partialObserver = H;
        }
        next(H) {
          const { partialObserver: K } = this;
          if (K.next)
            try {
              K.next(H);
            } catch (Ee) {
              Ue(Ee);
            }
        }
        error(H) {
          const { partialObserver: K } = this;
          if (K.error)
            try {
              K.error(H);
            } catch (Ee) {
              Ue(Ee);
            }
          else Ue(H);
        }
        complete() {
          const { partialObserver: H } = this;
          if (H.complete)
            try {
              H.complete();
            } catch (K) {
              Ue(K);
            }
        }
      }
      class Re extends he {
        constructor(H, K, Ee) {
          let ne;
          if ((super(), (0, f.m)(H) || !H))
            ne = {
              next: H ?? void 0,
              error: K ?? void 0,
              complete: Ee ?? void 0,
            };
          else {
            let ae;
            this && Z.v.useDeprecatedNextContext
              ? ((ae = Object.create(H)),
                (ae.unsubscribe = () => this.unsubscribe()),
                (ne = {
                  next: H.next && le(H.next, ae),
                  error: H.error && le(H.error, ae),
                  complete: H.complete && le(H.complete, ae),
                }))
              : (ne = H);
          }
          this.destination = new Oe(ne);
        }
      }
      function Ue(De) {
        Z.v.useDeprecatedSynchronousErrorHandling ? (0, G.O)(De) : (0, X.h)(De);
      }
      function ht(De, H) {
        const { onStoppedNotification: K } = Z.v;
        K && ie.z.setTimeout(() => K(De, H));
      }
      const ce = {
        closed: !0,
        next: c,
        error: function je(De) {
          throw De;
        },
        complete: c,
      };
    },
    727: (Ze, me, x) => {
      x.d(me, { Lc: () => we, w0: () => c, Nn: () => _e });
      var f = x(576);
      const Z = (0, x(3888).d)(
        (se) =>
          function (G) {
            se(this),
              (this.message = G
                ? `${G.length} errors occurred during unsubscription:\n${G.map(
                    (he, Ae) => `${Ae + 1}) ${he.toString()}`
                  ).join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = G);
          }
      );
      var X = x(8737);
      class c {
        constructor(ie) {
          (this.initialTeardown = ie),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let ie;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: G } = this;
            if (G)
              if (((this._parentage = null), Array.isArray(G)))
                for (const le of G) le.remove(this);
              else G.remove(this);
            const { initialTeardown: he } = this;
            if ((0, f.m)(he))
              try {
                he();
              } catch (le) {
                ie = le instanceof Z ? le.errors : [le];
              }
            const { _finalizers: Ae } = this;
            if (Ae) {
              this._finalizers = null;
              for (const le of Ae)
                try {
                  Q(le);
                } catch (Oe) {
                  (ie = ie ?? []),
                    Oe instanceof Z
                      ? (ie = [...ie, ...Oe.errors])
                      : ie.push(Oe);
                }
            }
            if (ie) throw new Z(ie);
          }
        }
        add(ie) {
          var G;
          if (ie && ie !== this)
            if (this.closed) Q(ie);
            else {
              if (ie instanceof c) {
                if (ie.closed || ie._hasParent(this)) return;
                ie._addParent(this);
              }
              (this._finalizers =
                null !== (G = this._finalizers) && void 0 !== G ? G : []).push(
                ie
              );
            }
        }
        _hasParent(ie) {
          const { _parentage: G } = this;
          return G === ie || (Array.isArray(G) && G.includes(ie));
        }
        _addParent(ie) {
          const { _parentage: G } = this;
          this._parentage = Array.isArray(G)
            ? (G.push(ie), G)
            : G
            ? [G, ie]
            : ie;
        }
        _removeParent(ie) {
          const { _parentage: G } = this;
          G === ie
            ? (this._parentage = null)
            : Array.isArray(G) && (0, X.P)(G, ie);
        }
        remove(ie) {
          const { _finalizers: G } = this;
          G && (0, X.P)(G, ie), ie instanceof c && ie._removeParent(this);
        }
      }
      c.EMPTY = (() => {
        const se = new c();
        return (se.closed = !0), se;
      })();
      const we = c.EMPTY;
      function _e(se) {
        return (
          se instanceof c ||
          (se &&
            "closed" in se &&
            (0, f.m)(se.remove) &&
            (0, f.m)(se.add) &&
            (0, f.m)(se.unsubscribe))
        );
      }
      function Q(se) {
        (0, f.m)(se) ? se() : se.unsubscribe();
      }
    },
    2416: (Ze, me, x) => {
      x.d(me, { v: () => f });
      const f = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    515: (Ze, me, x) => {
      x.d(me, { E: () => w });
      const w = new (x(9751).y)((c) => c.complete());
    },
    2076: (Ze, me, x) => {
      x.d(me, { D: () => Ee });
      var f = x(8421),
        w = x(9672),
        Z = x(4482),
        X = x(5403);
      function c(ne, ae = 0) {
        return (0, Z.e)((Pe, j) => {
          Pe.subscribe(
            (0, X.x)(
              j,
              (W) => (0, w.f)(j, ne, () => j.next(W), ae),
              () => (0, w.f)(j, ne, () => j.complete(), ae),
              (W) => (0, w.f)(j, ne, () => j.error(W), ae)
            )
          );
        });
      }
      function we(ne, ae = 0) {
        return (0, Z.e)((Pe, j) => {
          j.add(ne.schedule(() => Pe.subscribe(j), ae));
        });
      }
      var se = x(9751),
        G = x(2202),
        he = x(576);
      function le(ne, ae) {
        if (!ne) throw new Error("Iterable cannot be null");
        return new se.y((Pe) => {
          (0, w.f)(Pe, ae, () => {
            const j = ne[Symbol.asyncIterator]();
            (0, w.f)(
              Pe,
              ae,
              () => {
                j.next().then((W) => {
                  W.done ? Pe.complete() : Pe.next(W.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Oe = x(3670),
        Re = x(8239),
        Ue = x(1144),
        je = x(6495),
        ht = x(2206),
        ce = x(4532),
        De = x(3260);
      function Ee(ne, ae) {
        return ae
          ? (function K(ne, ae) {
              if (null != ne) {
                if ((0, Oe.c)(ne))
                  return (function _e(ne, ae) {
                    return (0, f.Xf)(ne).pipe(we(ae), c(ae));
                  })(ne, ae);
                if ((0, Ue.z)(ne))
                  return (function ie(ne, ae) {
                    return new se.y((Pe) => {
                      let j = 0;
                      return ae.schedule(function () {
                        j === ne.length
                          ? Pe.complete()
                          : (Pe.next(ne[j++]), Pe.closed || this.schedule());
                      });
                    });
                  })(ne, ae);
                if ((0, Re.t)(ne))
                  return (function Q(ne, ae) {
                    return (0, f.Xf)(ne).pipe(we(ae), c(ae));
                  })(ne, ae);
                if ((0, ht.D)(ne)) return le(ne, ae);
                if ((0, je.T)(ne))
                  return (function Ae(ne, ae) {
                    return new se.y((Pe) => {
                      let j;
                      return (
                        (0, w.f)(Pe, ae, () => {
                          (j = ne[G.h]()),
                            (0, w.f)(
                              Pe,
                              ae,
                              () => {
                                let W, oe;
                                try {
                                  ({ value: W, done: oe } = j.next());
                                } catch (z) {
                                  return void Pe.error(z);
                                }
                                oe ? Pe.complete() : Pe.next(W);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, he.m)(j?.return) && j.return()
                      );
                    });
                  })(ne, ae);
                if ((0, De.L)(ne))
                  return (function H(ne, ae) {
                    return le((0, De.Q)(ne), ae);
                  })(ne, ae);
              }
              throw (0, ce.z)(ne);
            })(ne, ae)
          : (0, f.Xf)(ne);
      }
    },
    8421: (Ze, me, x) => {
      x.d(me, { Xf: () => Ae });
      var f = x(655),
        w = x(1144),
        Z = x(8239),
        X = x(9751),
        c = x(3670),
        we = x(2206),
        _e = x(4532),
        Q = x(6495),
        se = x(3260),
        ie = x(576),
        G = x(7849),
        he = x(8822);
      function Ae(De) {
        if (De instanceof X.y) return De;
        if (null != De) {
          if ((0, c.c)(De))
            return (function le(De) {
              return new X.y((H) => {
                const K = De[he.L]();
                if ((0, ie.m)(K.subscribe)) return K.subscribe(H);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(De);
          if ((0, w.z)(De))
            return (function Oe(De) {
              return new X.y((H) => {
                for (let K = 0; K < De.length && !H.closed; K++) H.next(De[K]);
                H.complete();
              });
            })(De);
          if ((0, Z.t)(De))
            return (function Re(De) {
              return new X.y((H) => {
                De.then(
                  (K) => {
                    H.closed || (H.next(K), H.complete());
                  },
                  (K) => H.error(K)
                ).then(null, G.h);
              });
            })(De);
          if ((0, we.D)(De)) return je(De);
          if ((0, Q.T)(De))
            return (function Ue(De) {
              return new X.y((H) => {
                for (const K of De) if ((H.next(K), H.closed)) return;
                H.complete();
              });
            })(De);
          if ((0, se.L)(De))
            return (function ht(De) {
              return je((0, se.Q)(De));
            })(De);
        }
        throw (0, _e.z)(De);
      }
      function je(De) {
        return new X.y((H) => {
          (function ce(De, H) {
            var K, Ee, ne, ae;
            return (0, f.mG)(this, void 0, void 0, function* () {
              try {
                for (K = (0, f.KL)(De); !(Ee = yield K.next()).done; )
                  if ((H.next(Ee.value), H.closed)) return;
              } catch (Pe) {
                ne = { error: Pe };
              } finally {
                try {
                  Ee && !Ee.done && (ae = K.return) && (yield ae.call(K));
                } finally {
                  if (ne) throw ne.error;
                }
              }
              H.complete();
            });
          })(De, H).catch((K) => H.error(K));
        });
      }
    },
    9646: (Ze, me, x) => {
      x.d(me, { of: () => Z });
      var f = x(7669),
        w = x(2076);
      function Z(...X) {
        const c = (0, f.yG)(X);
        return (0, w.D)(X, c);
      }
    },
    5403: (Ze, me, x) => {
      x.d(me, { x: () => w });
      var f = x(2961);
      function w(X, c, we, _e, Q) {
        return new Z(X, c, we, _e, Q);
      }
      class Z extends f.Lv {
        constructor(c, we, _e, Q, se, ie) {
          super(c),
            (this.onFinalize = se),
            (this.shouldUnsubscribe = ie),
            (this._next = we
              ? function (G) {
                  try {
                    we(G);
                  } catch (he) {
                    c.error(he);
                  }
                }
              : super._next),
            (this._error = Q
              ? function (G) {
                  try {
                    Q(G);
                  } catch (he) {
                    c.error(he);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = _e
              ? function () {
                  try {
                    _e();
                  } catch (G) {
                    c.error(G);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var c;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: we } = this;
            super.unsubscribe(),
              !we &&
                (null === (c = this.onFinalize) ||
                  void 0 === c ||
                  c.call(this));
          }
        }
      }
    },
    4351: (Ze, me, x) => {
      x.d(me, { b: () => Z });
      var f = x(5577),
        w = x(576);
      function Z(X, c) {
        return (0, w.m)(c) ? (0, f.z)(X, c, 1) : (0, f.z)(X, 1);
      }
    },
    9300: (Ze, me, x) => {
      x.d(me, { h: () => Z });
      var f = x(4482),
        w = x(5403);
      function Z(X, c) {
        return (0, f.e)((we, _e) => {
          let Q = 0;
          we.subscribe((0, w.x)(_e, (se) => X.call(c, se, Q++) && _e.next(se)));
        });
      }
    },
    4004: (Ze, me, x) => {
      x.d(me, { U: () => Z });
      var f = x(4482),
        w = x(5403);
      function Z(X, c) {
        return (0, f.e)((we, _e) => {
          let Q = 0;
          we.subscribe(
            (0, w.x)(_e, (se) => {
              _e.next(X.call(c, se, Q++));
            })
          );
        });
      }
    },
    8189: (Ze, me, x) => {
      x.d(me, { J: () => Z });
      var f = x(5577),
        w = x(4671);
      function Z(X = 1 / 0) {
        return (0, f.z)(w.y, X);
      }
    },
    5577: (Ze, me, x) => {
      x.d(me, { z: () => Q });
      var f = x(4004),
        w = x(8421),
        Z = x(4482),
        X = x(9672),
        c = x(5403),
        _e = x(576);
      function Q(se, ie, G = 1 / 0) {
        return (0, _e.m)(ie)
          ? Q(
              (he, Ae) =>
                (0, f.U)((le, Oe) => ie(he, le, Ae, Oe))((0, w.Xf)(se(he, Ae))),
              G
            )
          : ("number" == typeof ie && (G = ie),
            (0, Z.e)((he, Ae) =>
              (function we(se, ie, G, he, Ae, le, Oe, Re) {
                const Ue = [];
                let je = 0,
                  ht = 0,
                  ce = !1;
                const De = () => {
                    ce && !Ue.length && !je && ie.complete();
                  },
                  H = (Ee) => (je < he ? K(Ee) : Ue.push(Ee)),
                  K = (Ee) => {
                    le && ie.next(Ee), je++;
                    let ne = !1;
                    (0, w.Xf)(G(Ee, ht++)).subscribe(
                      (0, c.x)(
                        ie,
                        (ae) => {
                          Ae?.(ae), le ? H(ae) : ie.next(ae);
                        },
                        () => {
                          ne = !0;
                        },
                        void 0,
                        () => {
                          if (ne)
                            try {
                              for (je--; Ue.length && je < he; ) {
                                const ae = Ue.shift();
                                Oe ? (0, X.f)(ie, Oe, () => K(ae)) : K(ae);
                              }
                              De();
                            } catch (ae) {
                              ie.error(ae);
                            }
                        }
                      )
                    );
                  };
                return (
                  se.subscribe(
                    (0, c.x)(ie, H, () => {
                      (ce = !0), De();
                    })
                  ),
                  () => {
                    Re?.();
                  }
                );
              })(he, Ae, se, G)
            ));
      }
    },
    5698: (Ze, me, x) => {
      x.d(me, { q: () => X });
      var f = x(515),
        w = x(4482),
        Z = x(5403);
      function X(c) {
        return c <= 0
          ? () => f.E
          : (0, w.e)((we, _e) => {
              let Q = 0;
              we.subscribe(
                (0, Z.x)(_e, (se) => {
                  ++Q <= c && (_e.next(se), c <= Q && _e.complete());
                })
              );
            });
      }
    },
    8505: (Ze, me, x) => {
      x.d(me, { b: () => c });
      var f = x(576),
        w = x(4482),
        Z = x(5403),
        X = x(4671);
      function c(we, _e, Q) {
        const se =
          (0, f.m)(we) || _e || Q ? { next: we, error: _e, complete: Q } : we;
        return se
          ? (0, w.e)((ie, G) => {
              var he;
              null === (he = se.subscribe) || void 0 === he || he.call(se);
              let Ae = !0;
              ie.subscribe(
                (0, Z.x)(
                  G,
                  (le) => {
                    var Oe;
                    null === (Oe = se.next) || void 0 === Oe || Oe.call(se, le),
                      G.next(le);
                  },
                  () => {
                    var le;
                    (Ae = !1),
                      null === (le = se.complete) ||
                        void 0 === le ||
                        le.call(se),
                      G.complete();
                  },
                  (le) => {
                    var Oe;
                    (Ae = !1),
                      null === (Oe = se.error) ||
                        void 0 === Oe ||
                        Oe.call(se, le),
                      G.error(le);
                  },
                  () => {
                    var le, Oe;
                    Ae &&
                      (null === (le = se.unsubscribe) ||
                        void 0 === le ||
                        le.call(se)),
                      null === (Oe = se.finalize) ||
                        void 0 === Oe ||
                        Oe.call(se);
                  }
                )
              );
            })
          : X.y;
      }
    },
    3410: (Ze, me, x) => {
      x.d(me, { z: () => f });
      const f = {
        setTimeout(w, Z, ...X) {
          const { delegate: c } = f;
          return c?.setTimeout
            ? c.setTimeout(w, Z, ...X)
            : setTimeout(w, Z, ...X);
        },
        clearTimeout(w) {
          const { delegate: Z } = f;
          return (Z?.clearTimeout || clearTimeout)(w);
        },
        delegate: void 0,
      };
    },
    2202: (Ze, me, x) => {
      x.d(me, { h: () => w });
      const w = (function f() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    8822: (Ze, me, x) => {
      x.d(me, { L: () => f });
      const f =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    7669: (Ze, me, x) => {
      x.d(me, { _6: () => we, jO: () => X, yG: () => c });
      var f = x(576);
      function Z(_e) {
        return _e[_e.length - 1];
      }
      function X(_e) {
        return (0, f.m)(Z(_e)) ? _e.pop() : void 0;
      }
      function c(_e) {
        return (function w(_e) {
          return _e && (0, f.m)(_e.schedule);
        })(Z(_e))
          ? _e.pop()
          : void 0;
      }
      function we(_e, Q) {
        return "number" == typeof Z(_e) ? _e.pop() : Q;
      }
    },
    4742: (Ze, me, x) => {
      x.d(me, { D: () => c });
      const { isArray: f } = Array,
        { getPrototypeOf: w, prototype: Z, keys: X } = Object;
      function c(_e) {
        if (1 === _e.length) {
          const Q = _e[0];
          if (f(Q)) return { args: Q, keys: null };
          if (
            (function we(_e) {
              return _e && "object" == typeof _e && w(_e) === Z;
            })(Q)
          ) {
            const se = X(Q);
            return { args: se.map((ie) => Q[ie]), keys: se };
          }
        }
        return { args: _e, keys: null };
      }
    },
    8737: (Ze, me, x) => {
      function f(w, Z) {
        if (w) {
          const X = w.indexOf(Z);
          0 <= X && w.splice(X, 1);
        }
      }
      x.d(me, { P: () => f });
    },
    3888: (Ze, me, x) => {
      function f(w) {
        const X = w((c) => {
          Error.call(c), (c.stack = new Error().stack);
        });
        return (
          (X.prototype = Object.create(Error.prototype)),
          (X.prototype.constructor = X),
          X
        );
      }
      x.d(me, { d: () => f });
    },
    1810: (Ze, me, x) => {
      function f(w, Z) {
        return w.reduce((X, c, we) => ((X[c] = Z[we]), X), {});
      }
      x.d(me, { n: () => f });
    },
    2806: (Ze, me, x) => {
      x.d(me, { O: () => X, x: () => Z });
      var f = x(2416);
      let w = null;
      function Z(c) {
        if (f.v.useDeprecatedSynchronousErrorHandling) {
          const we = !w;
          if ((we && (w = { errorThrown: !1, error: null }), c(), we)) {
            const { errorThrown: _e, error: Q } = w;
            if (((w = null), _e)) throw Q;
          }
        } else c();
      }
      function X(c) {
        f.v.useDeprecatedSynchronousErrorHandling &&
          w &&
          ((w.errorThrown = !0), (w.error = c));
      }
    },
    9672: (Ze, me, x) => {
      function f(w, Z, X, c = 0, we = !1) {
        const _e = Z.schedule(function () {
          X(), we ? w.add(this.schedule(null, c)) : this.unsubscribe();
        }, c);
        if ((w.add(_e), !we)) return _e;
      }
      x.d(me, { f: () => f });
    },
    4671: (Ze, me, x) => {
      function f(w) {
        return w;
      }
      x.d(me, { y: () => f });
    },
    1144: (Ze, me, x) => {
      x.d(me, { z: () => f });
      const f = (w) =>
        w && "number" == typeof w.length && "function" != typeof w;
    },
    2206: (Ze, me, x) => {
      x.d(me, { D: () => w });
      var f = x(576);
      function w(Z) {
        return Symbol.asyncIterator && (0, f.m)(Z?.[Symbol.asyncIterator]);
      }
    },
    576: (Ze, me, x) => {
      function f(w) {
        return "function" == typeof w;
      }
      x.d(me, { m: () => f });
    },
    3670: (Ze, me, x) => {
      x.d(me, { c: () => Z });
      var f = x(8822),
        w = x(576);
      function Z(X) {
        return (0, w.m)(X[f.L]);
      }
    },
    6495: (Ze, me, x) => {
      x.d(me, { T: () => Z });
      var f = x(2202),
        w = x(576);
      function Z(X) {
        return (0, w.m)(X?.[f.h]);
      }
    },
    8239: (Ze, me, x) => {
      x.d(me, { t: () => w });
      var f = x(576);
      function w(Z) {
        return (0, f.m)(Z?.then);
      }
    },
    3260: (Ze, me, x) => {
      x.d(me, { L: () => X, Q: () => Z });
      var f = x(655),
        w = x(576);
      function Z(c) {
        return (0, f.FC)(this, arguments, function* () {
          const _e = c.getReader();
          try {
            for (;;) {
              const { value: Q, done: se } = yield (0, f.qq)(_e.read());
              if (se) return yield (0, f.qq)(void 0);
              yield yield (0, f.qq)(Q);
            }
          } finally {
            _e.releaseLock();
          }
        });
      }
      function X(c) {
        return (0, w.m)(c?.getReader);
      }
    },
    4482: (Ze, me, x) => {
      x.d(me, { A: () => w, e: () => Z });
      var f = x(576);
      function w(X) {
        return (0, f.m)(X?.lift);
      }
      function Z(X) {
        return (c) => {
          if (w(c))
            return c.lift(function (we) {
              try {
                return X(we, this);
              } catch (_e) {
                this.error(_e);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    3268: (Ze, me, x) => {
      x.d(me, { Z: () => X });
      var f = x(4004);
      const { isArray: w } = Array;
      function X(c) {
        return (0, f.U)((we) =>
          (function Z(c, we) {
            return w(we) ? c(...we) : c(we);
          })(c, we)
        );
      }
    },
    9635: (Ze, me, x) => {
      x.d(me, { U: () => Z, z: () => w });
      var f = x(4671);
      function w(...X) {
        return Z(X);
      }
      function Z(X) {
        return 0 === X.length
          ? f.y
          : 1 === X.length
          ? X[0]
          : function (we) {
              return X.reduce((_e, Q) => Q(_e), we);
            };
      }
    },
    7849: (Ze, me, x) => {
      x.d(me, { h: () => Z });
      var f = x(2416),
        w = x(3410);
      function Z(X) {
        w.z.setTimeout(() => {
          const { onUnhandledError: c } = f.v;
          if (!c) throw X;
          c(X);
        });
      }
    },
    4532: (Ze, me, x) => {
      function f(w) {
        return new TypeError(
          `You provided ${
            null !== w && "object" == typeof w ? "an invalid object" : `'${w}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      x.d(me, { z: () => f });
    },
    655: (Ze, me, x) => {
      function Q(j, W, oe, z) {
        return new (oe || (oe = Promise))(function (fe, He) {
          function qe(dt) {
            try {
              ze(z.next(dt));
            } catch (qt) {
              He(qt);
            }
          }
          function zt(dt) {
            try {
              ze(z.throw(dt));
            } catch (qt) {
              He(qt);
            }
          }
          function ze(dt) {
            dt.done
              ? fe(dt.value)
              : (function Te(fe) {
                  return fe instanceof oe
                    ? fe
                    : new oe(function (He) {
                        He(fe);
                      });
                })(dt.value).then(qe, zt);
          }
          ze((z = z.apply(j, W || [])).next());
        });
      }
      function Ue(j) {
        return this instanceof Ue ? ((this.v = j), this) : new Ue(j);
      }
      function je(j, W, oe) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Te,
          z = oe.apply(j, W || []),
          fe = [];
        return (
          (Te = {}),
          He("next"),
          He("throw"),
          He("return"),
          (Te[Symbol.asyncIterator] = function () {
            return this;
          }),
          Te
        );
        function He(yt) {
          z[yt] &&
            (Te[yt] = function (Jt) {
              return new Promise(function (Nt, Ct) {
                fe.push([yt, Jt, Nt, Ct]) > 1 || qe(yt, Jt);
              });
            });
        }
        function qe(yt, Jt) {
          try {
            !(function zt(yt) {
              yt.value instanceof Ue
                ? Promise.resolve(yt.value.v).then(ze, dt)
                : qt(fe[0][2], yt);
            })(z[yt](Jt));
          } catch (Nt) {
            qt(fe[0][3], Nt);
          }
        }
        function ze(yt) {
          qe("next", yt);
        }
        function dt(yt) {
          qe("throw", yt);
        }
        function qt(yt, Jt) {
          yt(Jt), fe.shift(), fe.length && qe(fe[0][0], fe[0][1]);
        }
      }
      function ce(j) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var oe,
          W = j[Symbol.asyncIterator];
        return W
          ? W.call(j)
          : ((j = (function he(j) {
              var W = "function" == typeof Symbol && Symbol.iterator,
                oe = W && j[W],
                z = 0;
              if (oe) return oe.call(j);
              if (j && "number" == typeof j.length)
                return {
                  next: function () {
                    return (
                      j && z >= j.length && (j = void 0),
                      { value: j && j[z++], done: !j }
                    );
                  },
                };
              throw new TypeError(
                W
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(j)),
            (oe = {}),
            z("next"),
            z("throw"),
            z("return"),
            (oe[Symbol.asyncIterator] = function () {
              return this;
            }),
            oe);
        function z(fe) {
          oe[fe] =
            j[fe] &&
            function (He) {
              return new Promise(function (qe, zt) {
                !(function Te(fe, He, qe, zt) {
                  Promise.resolve(zt).then(function (ze) {
                    fe({ value: ze, done: qe });
                  }, He);
                })(qe, zt, (He = j[fe](He)).done, He.value);
              });
            };
        }
      }
      x.d(me, { FC: () => je, KL: () => ce, mG: () => Q, qq: () => Ue });
    },
    6895: (Ze, me, x) => {
      x.d(me, {
        Do: () => ce,
        EM: () => co,
        HT: () => c,
        JF: () => xo,
        K0: () => _e,
        Mx: () => dr,
        O5: () => bt,
        PC: () => tn,
        S$: () => Ue,
        V_: () => ie,
        Ye: () => De,
        b0: () => ht,
        bD: () => Sr,
        ez: () => Vn,
        mk: () => wr,
        q: () => Z,
        sg: () => en,
        uU: () => ti,
        w_: () => we,
      });
      var f = x(8256);
      let w = null;
      function Z() {
        return w;
      }
      function c(g) {
        w || (w = g);
      }
      class we {}
      const _e = new f.OlP("DocumentToken");
      let Q = (() => {
        class g {
          historyGo(_) {
            throw new Error("Not implemented");
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)();
          }),
          (g.ɵprov = f.Yz7({
            token: g,
            factory: function () {
              return (function se() {
                return (0, f.LFG)(G);
              })();
            },
            providedIn: "platform",
          })),
          g
        );
      })();
      const ie = new f.OlP("Location Initialized");
      let G = (() => {
        class g extends Q {
          constructor(_) {
            super(), (this._doc = _), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Z().getBaseHref(this._doc);
          }
          onPopState(_) {
            const A = Z().getGlobalEventTarget(this._doc, "window");
            return (
              A.addEventListener("popstate", _, !1),
              () => A.removeEventListener("popstate", _)
            );
          }
          onHashChange(_) {
            const A = Z().getGlobalEventTarget(this._doc, "window");
            return (
              A.addEventListener("hashchange", _, !1),
              () => A.removeEventListener("hashchange", _)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(_) {
            this.location.pathname = _;
          }
          pushState(_, A, L) {
            he() ? this._history.pushState(_, A, L) : (this.location.hash = L);
          }
          replaceState(_, A, L) {
            he()
              ? this._history.replaceState(_, A, L)
              : (this.location.hash = L);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(_ = 0) {
            this._history.go(_);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)(f.LFG(_e));
          }),
          (g.ɵprov = f.Yz7({
            token: g,
            factory: function () {
              return (function Ae() {
                return new G((0, f.LFG)(_e));
              })();
            },
            providedIn: "platform",
          })),
          g
        );
      })();
      function he() {
        return !!window.history.pushState;
      }
      function le(g, b) {
        if (0 == g.length) return b;
        if (0 == b.length) return g;
        let _ = 0;
        return (
          g.endsWith("/") && _++,
          b.startsWith("/") && _++,
          2 == _ ? g + b.substring(1) : 1 == _ ? g + b : g + "/" + b
        );
      }
      function Oe(g) {
        const b = g.match(/#|\?|$/),
          _ = (b && b.index) || g.length;
        return g.slice(0, _ - ("/" === g[_ - 1] ? 1 : 0)) + g.slice(_);
      }
      function Re(g) {
        return g && "?" !== g[0] ? "?" + g : g;
      }
      let Ue = (() => {
        class g {
          historyGo(_) {
            throw new Error("Not implemented");
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)();
          }),
          (g.ɵprov = f.Yz7({
            token: g,
            factory: function () {
              return (0, f.f3M)(ht);
            },
            providedIn: "root",
          })),
          g
        );
      })();
      const je = new f.OlP("appBaseHref");
      let ht = (() => {
          class g extends Ue {
            constructor(_, A) {
              super(),
                (this._platformLocation = _),
                (this._removeListenerFns = []),
                (this._baseHref =
                  A ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, f.f3M)(_e).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(_) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(_),
                this._platformLocation.onHashChange(_)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(_) {
              return le(this._baseHref, _);
            }
            path(_ = !1) {
              const A =
                  this._platformLocation.pathname +
                  Re(this._platformLocation.search),
                L = this._platformLocation.hash;
              return L && _ ? `${A}${L}` : A;
            }
            pushState(_, A, L, te) {
              const ge = this.prepareExternalUrl(L + Re(te));
              this._platformLocation.pushState(_, A, ge);
            }
            replaceState(_, A, L, te) {
              const ge = this.prepareExternalUrl(L + Re(te));
              this._platformLocation.replaceState(_, A, ge);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(_ = 0) {
              this._platformLocation.historyGo?.(_);
            }
          }
          return (
            (g.ɵfac = function (_) {
              return new (_ || g)(f.LFG(Q), f.LFG(je, 8));
            }),
            (g.ɵprov = f.Yz7({
              token: g,
              factory: g.ɵfac,
              providedIn: "root",
            })),
            g
          );
        })(),
        ce = (() => {
          class g extends Ue {
            constructor(_, A) {
              super(),
                (this._platformLocation = _),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != A && (this._baseHref = A);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(_) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(_),
                this._platformLocation.onHashChange(_)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(_ = !1) {
              let A = this._platformLocation.hash;
              return null == A && (A = "#"), A.length > 0 ? A.substring(1) : A;
            }
            prepareExternalUrl(_) {
              const A = le(this._baseHref, _);
              return A.length > 0 ? "#" + A : A;
            }
            pushState(_, A, L, te) {
              let ge = this.prepareExternalUrl(L + Re(te));
              0 == ge.length && (ge = this._platformLocation.pathname),
                this._platformLocation.pushState(_, A, ge);
            }
            replaceState(_, A, L, te) {
              let ge = this.prepareExternalUrl(L + Re(te));
              0 == ge.length && (ge = this._platformLocation.pathname),
                this._platformLocation.replaceState(_, A, ge);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(_ = 0) {
              this._platformLocation.historyGo?.(_);
            }
          }
          return (
            (g.ɵfac = function (_) {
              return new (_ || g)(f.LFG(Q), f.LFG(je, 8));
            }),
            (g.ɵprov = f.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        De = (() => {
          class g {
            constructor(_) {
              (this._subject = new f.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = _);
              const A = this._locationStrategy.getBaseHref();
              (this._baseHref = Oe(Ee(A))),
                this._locationStrategy.onPopState((L) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: L.state,
                    type: L.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(_ = !1) {
              return this.normalize(this._locationStrategy.path(_));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(_, A = "") {
              return this.path() == this.normalize(_ + Re(A));
            }
            normalize(_) {
              return g.stripTrailingSlash(
                (function K(g, b) {
                  return g && b.startsWith(g) ? b.substring(g.length) : b;
                })(this._baseHref, Ee(_))
              );
            }
            prepareExternalUrl(_) {
              return (
                _ && "/" !== _[0] && (_ = "/" + _),
                this._locationStrategy.prepareExternalUrl(_)
              );
            }
            go(_, A = "", L = null) {
              this._locationStrategy.pushState(L, "", _, A),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(_ + Re(A)),
                  L
                );
            }
            replaceState(_, A = "", L = null) {
              this._locationStrategy.replaceState(L, "", _, A),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(_ + Re(A)),
                  L
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(_ = 0) {
              this._locationStrategy.historyGo?.(_);
            }
            onUrlChange(_) {
              return (
                this._urlChangeListeners.push(_),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((A) => {
                    this._notifyUrlChangeListeners(A.url, A.state);
                  })),
                () => {
                  const A = this._urlChangeListeners.indexOf(_);
                  this._urlChangeListeners.splice(A, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(_ = "", A) {
              this._urlChangeListeners.forEach((L) => L(_, A));
            }
            subscribe(_, A, L) {
              return this._subject.subscribe({
                next: _,
                error: A,
                complete: L,
              });
            }
          }
          return (
            (g.normalizeQueryParams = Re),
            (g.joinWithSlash = le),
            (g.stripTrailingSlash = Oe),
            (g.ɵfac = function (_) {
              return new (_ || g)(f.LFG(Ue));
            }),
            (g.ɵprov = f.Yz7({
              token: g,
              factory: function () {
                return (function H() {
                  return new De((0, f.LFG)(Ue));
                })();
              },
              providedIn: "root",
            })),
            g
          );
        })();
      function Ee(g) {
        return g.replace(/\/index.html$/, "");
      }
      var j = (() => (
          ((j = j || {})[(j.Format = 0)] = "Format"),
          (j[(j.Standalone = 1)] = "Standalone"),
          j
        ))(),
        W = (() => (
          ((W = W || {})[(W.Narrow = 0)] = "Narrow"),
          (W[(W.Abbreviated = 1)] = "Abbreviated"),
          (W[(W.Wide = 2)] = "Wide"),
          (W[(W.Short = 3)] = "Short"),
          W
        ))(),
        oe = (() => (
          ((oe = oe || {})[(oe.Short = 0)] = "Short"),
          (oe[(oe.Medium = 1)] = "Medium"),
          (oe[(oe.Long = 2)] = "Long"),
          (oe[(oe.Full = 3)] = "Full"),
          oe
        ))(),
        z = (() => (
          ((z = z || {})[(z.Decimal = 0)] = "Decimal"),
          (z[(z.Group = 1)] = "Group"),
          (z[(z.List = 2)] = "List"),
          (z[(z.PercentSign = 3)] = "PercentSign"),
          (z[(z.PlusSign = 4)] = "PlusSign"),
          (z[(z.MinusSign = 5)] = "MinusSign"),
          (z[(z.Exponential = 6)] = "Exponential"),
          (z[(z.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
          (z[(z.PerMille = 8)] = "PerMille"),
          (z[(z.Infinity = 9)] = "Infinity"),
          (z[(z.NaN = 10)] = "NaN"),
          (z[(z.TimeSeparator = 11)] = "TimeSeparator"),
          (z[(z.CurrencyDecimal = 12)] = "CurrencyDecimal"),
          (z[(z.CurrencyGroup = 13)] = "CurrencyGroup"),
          z
        ))();
      function yt(g, b) {
        return Be((0, f.cg1)(g)[f.wAp.DateFormat], b);
      }
      function Jt(g, b) {
        return Be((0, f.cg1)(g)[f.wAp.TimeFormat], b);
      }
      function Nt(g, b) {
        return Be((0, f.cg1)(g)[f.wAp.DateTimeFormat], b);
      }
      function Ct(g, b) {
        const _ = (0, f.cg1)(g),
          A = _[f.wAp.NumberSymbols][b];
        if (typeof A > "u") {
          if (b === z.CurrencyDecimal) return _[f.wAp.NumberSymbols][z.Decimal];
          if (b === z.CurrencyGroup) return _[f.wAp.NumberSymbols][z.Group];
        }
        return A;
      }
      function An(g) {
        if (!g[f.wAp.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              g[f.wAp.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function Be(g, b) {
        for (let _ = b; _ > -1; _--) if (typeof g[_] < "u") return g[_];
        throw new Error("Locale data API: locale data undefined");
      }
      function an(g) {
        const [b, _] = g.split(":");
        return { hours: +b, minutes: +_ };
      }
      const ir =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        kt = {},
        pe =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var N = (() => (
          ((N = N || {})[(N.Short = 0)] = "Short"),
          (N[(N.ShortGMT = 1)] = "ShortGMT"),
          (N[(N.Long = 2)] = "Long"),
          (N[(N.Extended = 3)] = "Extended"),
          N
        ))(),
        E = (() => (
          ((E = E || {})[(E.FullYear = 0)] = "FullYear"),
          (E[(E.Month = 1)] = "Month"),
          (E[(E.Date = 2)] = "Date"),
          (E[(E.Hours = 3)] = "Hours"),
          (E[(E.Minutes = 4)] = "Minutes"),
          (E[(E.Seconds = 5)] = "Seconds"),
          (E[(E.FractionalSeconds = 6)] = "FractionalSeconds"),
          (E[(E.Day = 7)] = "Day"),
          E
        ))(),
        U = (() => (
          ((U = U || {})[(U.DayPeriods = 0)] = "DayPeriods"),
          (U[(U.Days = 1)] = "Days"),
          (U[(U.Months = 2)] = "Months"),
          (U[(U.Eras = 3)] = "Eras"),
          U
        ))();
      function I(g, b, _, A) {
        let L = (function Wn(g) {
          if (kn(g)) return g;
          if ("number" == typeof g && !isNaN(g)) return new Date(g);
          if ("string" == typeof g) {
            if (((g = g.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(g))) {
              const [L, te = 1, ge = 1] = g.split("-").map((Ne) => +Ne);
              return k(L, te - 1, ge);
            }
            const _ = parseFloat(g);
            if (!isNaN(g - _)) return new Date(_);
            let A;
            if ((A = g.match(ir)))
              return (function Yn(g) {
                const b = new Date(0);
                let _ = 0,
                  A = 0;
                const L = g[8] ? b.setUTCFullYear : b.setFullYear,
                  te = g[8] ? b.setUTCHours : b.setHours;
                g[9] &&
                  ((_ = Number(g[9] + g[10])), (A = Number(g[9] + g[11]))),
                  L.call(b, Number(g[1]), Number(g[2]) - 1, Number(g[3]));
                const ge = Number(g[4] || 0) - _,
                  Ne = Number(g[5] || 0) - A,
                  vt = Number(g[6] || 0),
                  _t = Math.floor(1e3 * parseFloat("0." + (g[7] || 0)));
                return te.call(b, ge, Ne, vt, _t), b;
              })(A);
          }
          const b = new Date(g);
          if (!kn(b)) throw new Error(`Unable to convert "${g}" into a date`);
          return b;
        })(g);
        b = Y(_, b) || b;
        let Ne,
          ge = [];
        for (; b; ) {
          if (((Ne = pe.exec(b)), !Ne)) {
            ge.push(b);
            break;
          }
          {
            ge = ge.concat(Ne.slice(1));
            const Et = ge.pop();
            if (!Et) break;
            b = Et;
          }
        }
        let vt = L.getTimezoneOffset();
        A &&
          ((vt = zn(A, vt)),
          (L = (function ro(g, b, _) {
            const A = _ ? -1 : 1,
              L = g.getTimezoneOffset();
            return (function Zn(g, b) {
              return (
                (g = new Date(g.getTime())).setMinutes(g.getMinutes() + b), g
              );
            })(g, A * (zn(b, L) - L));
          })(L, A, !0)));
        let _t = "";
        return (
          ge.forEach((Et) => {
            const ft = (function vn(g) {
              if (Ft[g]) return Ft[g];
              let b;
              switch (g) {
                case "G":
                case "GG":
                case "GGG":
                  b = Le(U.Eras, W.Abbreviated);
                  break;
                case "GGGG":
                  b = Le(U.Eras, W.Wide);
                  break;
                case "GGGGG":
                  b = Le(U.Eras, W.Narrow);
                  break;
                case "y":
                  b = gt(E.FullYear, 1, 0, !1, !0);
                  break;
                case "yy":
                  b = gt(E.FullYear, 2, 0, !0, !0);
                  break;
                case "yyy":
                  b = gt(E.FullYear, 3, 0, !1, !0);
                  break;
                case "yyyy":
                  b = gt(E.FullYear, 4, 0, !1, !0);
                  break;
                case "Y":
                  b = dn(1);
                  break;
                case "YY":
                  b = dn(2, !0);
                  break;
                case "YYY":
                  b = dn(3);
                  break;
                case "YYYY":
                  b = dn(4);
                  break;
                case "M":
                case "L":
                  b = gt(E.Month, 1, 1);
                  break;
                case "MM":
                case "LL":
                  b = gt(E.Month, 2, 1);
                  break;
                case "MMM":
                  b = Le(U.Months, W.Abbreviated);
                  break;
                case "MMMM":
                  b = Le(U.Months, W.Wide);
                  break;
                case "MMMMM":
                  b = Le(U.Months, W.Narrow);
                  break;
                case "LLL":
                  b = Le(U.Months, W.Abbreviated, j.Standalone);
                  break;
                case "LLLL":
                  b = Le(U.Months, W.Wide, j.Standalone);
                  break;
                case "LLLLL":
                  b = Le(U.Months, W.Narrow, j.Standalone);
                  break;
                case "w":
                  b = ln(1);
                  break;
                case "ww":
                  b = ln(2);
                  break;
                case "W":
                  b = ln(1, !0);
                  break;
                case "d":
                  b = gt(E.Date, 1);
                  break;
                case "dd":
                  b = gt(E.Date, 2);
                  break;
                case "c":
                case "cc":
                  b = gt(E.Day, 1);
                  break;
                case "ccc":
                  b = Le(U.Days, W.Abbreviated, j.Standalone);
                  break;
                case "cccc":
                  b = Le(U.Days, W.Wide, j.Standalone);
                  break;
                case "ccccc":
                  b = Le(U.Days, W.Narrow, j.Standalone);
                  break;
                case "cccccc":
                  b = Le(U.Days, W.Short, j.Standalone);
                  break;
                case "E":
                case "EE":
                case "EEE":
                  b = Le(U.Days, W.Abbreviated);
                  break;
                case "EEEE":
                  b = Le(U.Days, W.Wide);
                  break;
                case "EEEEE":
                  b = Le(U.Days, W.Narrow);
                  break;
                case "EEEEEE":
                  b = Le(U.Days, W.Short);
                  break;
                case "a":
                case "aa":
                case "aaa":
                  b = Le(U.DayPeriods, W.Abbreviated);
                  break;
                case "aaaa":
                  b = Le(U.DayPeriods, W.Wide);
                  break;
                case "aaaaa":
                  b = Le(U.DayPeriods, W.Narrow);
                  break;
                case "b":
                case "bb":
                case "bbb":
                  b = Le(U.DayPeriods, W.Abbreviated, j.Standalone, !0);
                  break;
                case "bbbb":
                  b = Le(U.DayPeriods, W.Wide, j.Standalone, !0);
                  break;
                case "bbbbb":
                  b = Le(U.DayPeriods, W.Narrow, j.Standalone, !0);
                  break;
                case "B":
                case "BB":
                case "BBB":
                  b = Le(U.DayPeriods, W.Abbreviated, j.Format, !0);
                  break;
                case "BBBB":
                  b = Le(U.DayPeriods, W.Wide, j.Format, !0);
                  break;
                case "BBBBB":
                  b = Le(U.DayPeriods, W.Narrow, j.Format, !0);
                  break;
                case "h":
                  b = gt(E.Hours, 1, -12);
                  break;
                case "hh":
                  b = gt(E.Hours, 2, -12);
                  break;
                case "H":
                  b = gt(E.Hours, 1);
                  break;
                case "HH":
                  b = gt(E.Hours, 2);
                  break;
                case "m":
                  b = gt(E.Minutes, 1);
                  break;
                case "mm":
                  b = gt(E.Minutes, 2);
                  break;
                case "s":
                  b = gt(E.Seconds, 1);
                  break;
                case "ss":
                  b = gt(E.Seconds, 2);
                  break;
                case "S":
                  b = gt(E.FractionalSeconds, 1);
                  break;
                case "SS":
                  b = gt(E.FractionalSeconds, 2);
                  break;
                case "SSS":
                  b = gt(E.FractionalSeconds, 3);
                  break;
                case "Z":
                case "ZZ":
                case "ZZZ":
                  b = Dt(N.Short);
                  break;
                case "ZZZZZ":
                  b = Dt(N.Extended);
                  break;
                case "O":
                case "OO":
                case "OOO":
                case "z":
                case "zz":
                case "zzz":
                  b = Dt(N.ShortGMT);
                  break;
                case "OOOO":
                case "ZZZZ":
                case "zzzz":
                  b = Dt(N.Long);
                  break;
                default:
                  return null;
              }
              return (Ft[g] = b), b;
            })(Et);
            _t += ft
              ? ft(L, _, vt)
              : "''" === Et
              ? "'"
              : Et.replace(/(^'|'$)/g, "").replace(/''/g, "'");
          }),
          _t
        );
      }
      function k(g, b, _) {
        const A = new Date(0);
        return A.setFullYear(g, b, _), A.setHours(0, 0, 0), A;
      }
      function Y(g, b) {
        const _ = (function fe(g) {
          return (0, f.cg1)(g)[f.wAp.LocaleId];
        })(g);
        if (((kt[_] = kt[_] || {}), kt[_][b])) return kt[_][b];
        let A = "";
        switch (b) {
          case "shortDate":
            A = yt(g, oe.Short);
            break;
          case "mediumDate":
            A = yt(g, oe.Medium);
            break;
          case "longDate":
            A = yt(g, oe.Long);
            break;
          case "fullDate":
            A = yt(g, oe.Full);
            break;
          case "shortTime":
            A = Jt(g, oe.Short);
            break;
          case "mediumTime":
            A = Jt(g, oe.Medium);
            break;
          case "longTime":
            A = Jt(g, oe.Long);
            break;
          case "fullTime":
            A = Jt(g, oe.Full);
            break;
          case "short":
            const L = Y(g, "shortTime"),
              te = Y(g, "shortDate");
            A = Ce(Nt(g, oe.Short), [L, te]);
            break;
          case "medium":
            const ge = Y(g, "mediumTime"),
              Ne = Y(g, "mediumDate");
            A = Ce(Nt(g, oe.Medium), [ge, Ne]);
            break;
          case "long":
            const vt = Y(g, "longTime"),
              _t = Y(g, "longDate");
            A = Ce(Nt(g, oe.Long), [vt, _t]);
            break;
          case "full":
            const Et = Y(g, "fullTime"),
              ft = Y(g, "fullDate");
            A = Ce(Nt(g, oe.Full), [Et, ft]);
        }
        return A && (kt[_][b] = A), A;
      }
      function Ce(g, b) {
        return (
          b &&
            (g = g.replace(/\{([^}]+)}/g, function (_, A) {
              return null != b && A in b ? b[A] : _;
            })),
          g
        );
      }
      function Me(g, b, _ = "-", A, L) {
        let te = "";
        (g < 0 || (L && g <= 0)) && (L ? (g = 1 - g) : ((g = -g), (te = _)));
        let ge = String(g);
        for (; ge.length < b; ) ge = "0" + ge;
        return A && (ge = ge.slice(ge.length - b)), te + ge;
      }
      function gt(g, b, _ = 0, A = !1, L = !1) {
        return function (te, ge) {
          let Ne = (function Zt(g, b) {
            switch (g) {
              case E.FullYear:
                return b.getFullYear();
              case E.Month:
                return b.getMonth();
              case E.Date:
                return b.getDate();
              case E.Hours:
                return b.getHours();
              case E.Minutes:
                return b.getMinutes();
              case E.Seconds:
                return b.getSeconds();
              case E.FractionalSeconds:
                return b.getMilliseconds();
              case E.Day:
                return b.getDay();
              default:
                throw new Error(`Unknown DateType value "${g}".`);
            }
          })(g, te);
          if (((_ > 0 || Ne > -_) && (Ne += _), g === E.Hours))
            0 === Ne && -12 === _ && (Ne = 12);
          else if (g === E.FractionalSeconds)
            return (function pt(g, b) {
              return Me(g, 3).substring(0, b);
            })(Ne, b);
          const vt = Ct(ge, z.MinusSign);
          return Me(Ne, b, vt, A, L);
        };
      }
      function Le(g, b, _ = j.Format, A = !1) {
        return function (L, te) {
          return (function Ot(g, b, _, A, L, te) {
            switch (_) {
              case U.Months:
                return (function zt(g, b, _) {
                  const A = (0, f.cg1)(g),
                    te = Be(
                      [A[f.wAp.MonthsFormat], A[f.wAp.MonthsStandalone]],
                      b
                    );
                  return Be(te, _);
                })(b, L, A)[g.getMonth()];
              case U.Days:
                return (function qe(g, b, _) {
                  const A = (0, f.cg1)(g),
                    te = Be([A[f.wAp.DaysFormat], A[f.wAp.DaysStandalone]], b);
                  return Be(te, _);
                })(b, L, A)[g.getDay()];
              case U.DayPeriods:
                const ge = g.getHours(),
                  Ne = g.getMinutes();
                if (te) {
                  const _t = (function sn(g) {
                      const b = (0, f.cg1)(g);
                      return (
                        An(b),
                        (b[f.wAp.ExtraData][2] || []).map((A) =>
                          "string" == typeof A ? an(A) : [an(A[0]), an(A[1])]
                        )
                      );
                    })(b),
                    Et = (function Xt(g, b, _) {
                      const A = (0, f.cg1)(g);
                      An(A);
                      const te =
                        Be([A[f.wAp.ExtraData][0], A[f.wAp.ExtraData][1]], b) ||
                        [];
                      return Be(te, _) || [];
                    })(b, L, A),
                    ft = _t.findIndex((ct) => {
                      if (Array.isArray(ct)) {
                        const [mt, at] = ct,
                          rr = ge >= mt.hours && Ne >= mt.minutes,
                          En =
                            ge < at.hours ||
                            (ge === at.hours && Ne < at.minutes);
                        if (mt.hours < at.hours) {
                          if (rr && En) return !0;
                        } else if (rr || En) return !0;
                      } else if (ct.hours === ge && ct.minutes === Ne)
                        return !0;
                      return !1;
                    });
                  if (-1 !== ft) return Et[ft];
                }
                return (function He(g, b, _) {
                  const A = (0, f.cg1)(g),
                    te = Be(
                      [
                        A[f.wAp.DayPeriodsFormat],
                        A[f.wAp.DayPeriodsStandalone],
                      ],
                      b
                    );
                  return Be(te, _);
                })(b, L, A)[ge < 12 ? 0 : 1];
              case U.Eras:
                return (function ze(g, b) {
                  return Be((0, f.cg1)(g)[f.wAp.Eras], b);
                })(b, A)[g.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${_}`);
            }
          })(L, te, g, b, _, A);
        };
      }
      function Dt(g) {
        return function (b, _, A) {
          const L = -1 * A,
            te = Ct(_, z.MinusSign),
            ge = L > 0 ? Math.floor(L / 60) : Math.ceil(L / 60);
          switch (g) {
            case N.Short:
              return (
                (L >= 0 ? "+" : "") +
                Me(ge, 2, te) +
                Me(Math.abs(L % 60), 2, te)
              );
            case N.ShortGMT:
              return "GMT" + (L >= 0 ? "+" : "") + Me(ge, 1, te);
            case N.Long:
              return (
                "GMT" +
                (L >= 0 ? "+" : "") +
                Me(ge, 2, te) +
                ":" +
                Me(Math.abs(L % 60), 2, te)
              );
            case N.Extended:
              return 0 === A
                ? "Z"
                : (L >= 0 ? "+" : "") +
                    Me(ge, 2, te) +
                    ":" +
                    Me(Math.abs(L % 60), 2, te);
            default:
              throw new Error(`Unknown zone width "${g}"`);
          }
        };
      }
      function Je(g) {
        return k(g.getFullYear(), g.getMonth(), g.getDate() + (4 - g.getDay()));
      }
      function ln(g, b = !1) {
        return function (_, A) {
          let L;
          if (b) {
            const te = new Date(_.getFullYear(), _.getMonth(), 1).getDay() - 1,
              ge = _.getDate();
            L = 1 + Math.floor((ge + te) / 7);
          } else {
            const te = Je(_),
              ge = (function St(g) {
                const b = k(g, 0, 1).getDay();
                return k(g, 0, 1 + (b <= 4 ? 4 : 11) - b);
              })(te.getFullYear()),
              Ne = te.getTime() - ge.getTime();
            L = 1 + Math.round(Ne / 6048e5);
          }
          return Me(L, g, Ct(A, z.MinusSign));
        };
      }
      function dn(g, b = !1) {
        return function (_, A) {
          return Me(Je(_).getFullYear(), g, Ct(A, z.MinusSign), b);
        };
      }
      const Ft = {};
      function zn(g, b) {
        g = g.replace(/:/g, "");
        const _ = Date.parse("Jan 01, 1970 00:00:00 " + g) / 6e4;
        return isNaN(_) ? b : _;
      }
      function kn(g) {
        return g instanceof Date && !isNaN(g.valueOf());
      }
      function dr(g, b) {
        b = encodeURIComponent(b);
        for (const _ of g.split(";")) {
          const A = _.indexOf("="),
            [L, te] = -1 == A ? [_, ""] : [_.slice(0, A), _.slice(A + 1)];
          if (L.trim() === b) return decodeURIComponent(te);
        }
        return null;
      }
      let wr = (() => {
        class g {
          constructor(_, A, L, te) {
            (this._iterableDiffers = _),
              (this._keyValueDiffers = A),
              (this._ngEl = L),
              (this._renderer = te),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(_) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof _ ? _.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(_) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof _ ? _.split(/\s+/) : _),
              this._rawClass &&
                ((0, f.sIi)(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const _ = this._iterableDiffer.diff(this._rawClass);
              _ && this._applyIterableChanges(_);
            } else if (this._keyValueDiffer) {
              const _ = this._keyValueDiffer.diff(this._rawClass);
              _ && this._applyKeyValueChanges(_);
            }
          }
          _applyKeyValueChanges(_) {
            _.forEachAddedItem((A) => this._toggleClass(A.key, A.currentValue)),
              _.forEachChangedItem((A) =>
                this._toggleClass(A.key, A.currentValue)
              ),
              _.forEachRemovedItem((A) => {
                A.previousValue && this._toggleClass(A.key, !1);
              });
          }
          _applyIterableChanges(_) {
            _.forEachAddedItem((A) => {
              if ("string" != typeof A.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${(0,
                  f.AaK)(A.item)}`
                );
              this._toggleClass(A.item, !0);
            }),
              _.forEachRemovedItem((A) => this._toggleClass(A.item, !1));
          }
          _applyClasses(_) {
            _ &&
              (Array.isArray(_) || _ instanceof Set
                ? _.forEach((A) => this._toggleClass(A, !0))
                : Object.keys(_).forEach((A) => this._toggleClass(A, !!_[A])));
          }
          _removeClasses(_) {
            _ &&
              (Array.isArray(_) || _ instanceof Set
                ? _.forEach((A) => this._toggleClass(A, !1))
                : Object.keys(_).forEach((A) => this._toggleClass(A, !1)));
          }
          _toggleClass(_, A) {
            (_ = _.trim()) &&
              _.split(/\s+/g).forEach((L) => {
                A
                  ? this._renderer.addClass(this._ngEl.nativeElement, L)
                  : this._renderer.removeClass(this._ngEl.nativeElement, L);
              });
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)(
              f.Y36(f.ZZ4),
              f.Y36(f.aQg),
              f.Y36(f.SBq),
              f.Y36(f.Qsj)
            );
          }),
          (g.ɵdir = f.lG2({
            type: g,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
            standalone: !0,
          })),
          g
        );
      })();
      class qn {
        constructor(b, _, A, L) {
          (this.$implicit = b),
            (this.ngForOf = _),
            (this.index = A),
            (this.count = L);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let en = (() => {
        class g {
          constructor(_, A, L) {
            (this._viewContainer = _),
              (this._template = A),
              (this._differs = L),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(_) {
            (this._ngForOf = _), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(_) {
            this._trackByFn = _;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(_) {
            _ && (this._template = _);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const _ = this._ngForOf;
              !this._differ &&
                _ &&
                (this._differ = this._differs
                  .find(_)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const _ = this._differ.diff(this._ngForOf);
              _ && this._applyChanges(_);
            }
          }
          _applyChanges(_) {
            const A = this._viewContainer;
            _.forEachOperation((L, te, ge) => {
              if (null == L.previousIndex)
                A.createEmbeddedView(
                  this._template,
                  new qn(L.item, this._ngForOf, -1, -1),
                  null === ge ? void 0 : ge
                );
              else if (null == ge) A.remove(null === te ? void 0 : te);
              else if (null !== te) {
                const Ne = A.get(te);
                A.move(Ne, ge), Jn(Ne, L);
              }
            });
            for (let L = 0, te = A.length; L < te; L++) {
              const Ne = A.get(L).context;
              (Ne.index = L), (Ne.count = te), (Ne.ngForOf = this._ngForOf);
            }
            _.forEachIdentityChange((L) => {
              Jn(A.get(L.currentIndex), L);
            });
          }
          static ngTemplateContextGuard(_, A) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)(f.Y36(f.s_b), f.Y36(f.Rgc), f.Y36(f.ZZ4));
          }),
          (g.ɵdir = f.lG2({
            type: g,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
            standalone: !0,
          })),
          g
        );
      })();
      function Jn(g, b) {
        g.context.$implicit = b.item;
      }
      let bt = (() => {
        class g {
          constructor(_, A) {
            (this._viewContainer = _),
              (this._context = new br()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = A);
          }
          set ngIf(_) {
            (this._context.$implicit = this._context.ngIf = _),
              this._updateView();
          }
          set ngIfThen(_) {
            hr("ngIfThen", _),
              (this._thenTemplateRef = _),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(_) {
            hr("ngIfElse", _),
              (this._elseTemplateRef = _),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(_, A) {
            return !0;
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)(f.Y36(f.s_b), f.Y36(f.Rgc));
          }),
          (g.ɵdir = f.lG2({
            type: g,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          g
        );
      })();
      class br {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function hr(g, b) {
        if (b && !b.createEmbeddedView)
          throw new Error(
            `${g} must be a TemplateRef, but received '${(0, f.AaK)(b)}'.`
          );
      }
      let tn = (() => {
        class g {
          constructor(_, A, L) {
            (this._ngEl = _),
              (this._differs = A),
              (this._renderer = L),
              (this._ngStyle = null),
              (this._differ = null);
          }
          set ngStyle(_) {
            (this._ngStyle = _),
              !this._differ &&
                _ &&
                (this._differ = this._differs.find(_).create());
          }
          ngDoCheck() {
            if (this._differ) {
              const _ = this._differ.diff(this._ngStyle);
              _ && this._applyChanges(_);
            }
          }
          _setStyle(_, A) {
            const [L, te] = _.split("."),
              ge = -1 === L.indexOf("-") ? void 0 : f.JOm.DashCase;
            null != A
              ? this._renderer.setStyle(
                  this._ngEl.nativeElement,
                  L,
                  te ? `${A}${te}` : A,
                  ge
                )
              : this._renderer.removeStyle(this._ngEl.nativeElement, L, ge);
          }
          _applyChanges(_) {
            _.forEachRemovedItem((A) => this._setStyle(A.key, null)),
              _.forEachAddedItem((A) => this._setStyle(A.key, A.currentValue)),
              _.forEachChangedItem((A) =>
                this._setStyle(A.key, A.currentValue)
              );
          }
        }
        return (
          (g.ɵfac = function (_) {
            return new (_ || g)(f.Y36(f.SBq), f.Y36(f.aQg), f.Y36(f.Qsj));
          }),
          (g.ɵdir = f.lG2({
            type: g,
            selectors: [["", "ngStyle", ""]],
            inputs: { ngStyle: "ngStyle" },
            standalone: !0,
          })),
          g
        );
      })();
      const ei = new f.OlP("DATE_PIPE_DEFAULT_TIMEZONE");
      let ti = (() => {
          class g {
            constructor(_, A) {
              (this.locale = _), (this.defaultTimezone = A);
            }
            transform(_, A = "mediumDate", L, te) {
              if (null == _ || "" === _ || _ != _) return null;
              try {
                return I(
                  _,
                  A,
                  te || this.locale,
                  L ?? this.defaultTimezone ?? void 0
                );
              } catch (ge) {
                throw (function Vt(g, b) {
                  return new f.vHH(2100, !1);
                })();
              }
            }
          }
          return (
            (g.ɵfac = function (_) {
              return new (_ || g)(f.Y36(f.soG, 16), f.Y36(ei, 24));
            }),
            (g.ɵpipe = f.Yjl({
              name: "date",
              type: g,
              pure: !0,
              standalone: !0,
            })),
            g
          );
        })(),
        Vn = (() => {
          class g {}
          return (
            (g.ɵfac = function (_) {
              return new (_ || g)();
            }),
            (g.ɵmod = f.oAB({ type: g })),
            (g.ɵinj = f.cJS({})),
            g
          );
        })();
      const Sr = "browser";
      let co = (() => {
        class g {}
        return (
          (g.ɵprov = (0, f.Yz7)({
            token: g,
            providedIn: "root",
            factory: () => new nn((0, f.LFG)(_e), window),
          })),
          g
        );
      })();
      class nn {
        constructor(b, _) {
          (this.document = b), (this.window = _), (this.offset = () => [0, 0]);
        }
        setOffset(b) {
          this.offset = Array.isArray(b) ? () => b : b;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(b) {
          this.supportsScrolling() && this.window.scrollTo(b[0], b[1]);
        }
        scrollToAnchor(b) {
          if (!this.supportsScrolling()) return;
          const _ = (function fo(g, b) {
            const _ = g.getElementById(b) || g.getElementsByName(b)[0];
            if (_) return _;
            if (
              "function" == typeof g.createTreeWalker &&
              g.body &&
              (g.body.createShadowRoot || g.body.attachShadow)
            ) {
              const A = g.createTreeWalker(g.body, NodeFilter.SHOW_ELEMENT);
              let L = A.currentNode;
              for (; L; ) {
                const te = L.shadowRoot;
                if (te) {
                  const ge =
                    te.getElementById(b) || te.querySelector(`[name="${b}"]`);
                  if (ge) return ge;
                }
                L = A.nextNode();
              }
            }
            return null;
          })(this.document, b);
          _ && (this.scrollToElement(_), _.focus());
        }
        setHistoryScrollRestoration(b) {
          if (this.supportScrollRestoration()) {
            const _ = this.window.history;
            _ && _.scrollRestoration && (_.scrollRestoration = b);
          }
        }
        scrollToElement(b) {
          const _ = b.getBoundingClientRect(),
            A = _.left + this.window.pageXOffset,
            L = _.top + this.window.pageYOffset,
            te = this.offset();
          this.window.scrollTo(A - te[0], L - te[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const b =
              gr(this.window.history) ||
              gr(Object.getPrototypeOf(this.window.history));
            return !(!b || (!b.writable && !b.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function gr(g) {
        return Object.getOwnPropertyDescriptor(g, "scrollRestoration");
      }
      class xo {}
    },
    529: (Ze, me, x) => {
      x.d(me, { JF: () => _n, TP: () => qe, WM: () => ie, eN: () => fe });
      var f = x(6895),
        w = x(8256),
        Z = x(9646),
        X = x(9751),
        c = x(4351),
        we = x(9300),
        _e = x(4004);
      class Q {}
      class se {}
      class ie {
        constructor(N) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            N
              ? (this.lazyInit =
                  "string" == typeof N
                    ? () => {
                        (this.headers = new Map()),
                          N.split("\n").forEach((E) => {
                            const U = E.indexOf(":");
                            if (U > 0) {
                              const I = E.slice(0, U),
                                k = I.toLowerCase(),
                                Y = E.slice(U + 1).trim();
                              this.maybeSetNormalizedName(I, k),
                                this.headers.has(k)
                                  ? this.headers.get(k).push(Y)
                                  : this.headers.set(k, [Y]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(N).forEach((E) => {
                            let U = N[E];
                            const I = E.toLowerCase();
                            "string" == typeof U && (U = [U]),
                              U.length > 0 &&
                                (this.headers.set(I, U),
                                this.maybeSetNormalizedName(E, I));
                          });
                      })
              : (this.headers = new Map());
        }
        has(N) {
          return this.init(), this.headers.has(N.toLowerCase());
        }
        get(N) {
          this.init();
          const E = this.headers.get(N.toLowerCase());
          return E && E.length > 0 ? E[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(N) {
          return this.init(), this.headers.get(N.toLowerCase()) || null;
        }
        append(N, E) {
          return this.clone({ name: N, value: E, op: "a" });
        }
        set(N, E) {
          return this.clone({ name: N, value: E, op: "s" });
        }
        delete(N, E) {
          return this.clone({ name: N, value: E, op: "d" });
        }
        maybeSetNormalizedName(N, E) {
          this.normalizedNames.has(E) || this.normalizedNames.set(E, N);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof ie
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((N) => this.applyUpdate(N)),
              (this.lazyUpdate = null)));
        }
        copyFrom(N) {
          N.init(),
            Array.from(N.headers.keys()).forEach((E) => {
              this.headers.set(E, N.headers.get(E)),
                this.normalizedNames.set(E, N.normalizedNames.get(E));
            });
        }
        clone(N) {
          const E = new ie();
          return (
            (E.lazyInit =
              this.lazyInit && this.lazyInit instanceof ie
                ? this.lazyInit
                : this),
            (E.lazyUpdate = (this.lazyUpdate || []).concat([N])),
            E
          );
        }
        applyUpdate(N) {
          const E = N.name.toLowerCase();
          switch (N.op) {
            case "a":
            case "s":
              let U = N.value;
              if (("string" == typeof U && (U = [U]), 0 === U.length)) return;
              this.maybeSetNormalizedName(N.name, E);
              const I = ("a" === N.op ? this.headers.get(E) : void 0) || [];
              I.push(...U), this.headers.set(E, I);
              break;
            case "d":
              const k = N.value;
              if (k) {
                let Y = this.headers.get(E);
                if (!Y) return;
                (Y = Y.filter((Ce) => -1 === k.indexOf(Ce))),
                  0 === Y.length
                    ? (this.headers.delete(E), this.normalizedNames.delete(E))
                    : this.headers.set(E, Y);
              } else this.headers.delete(E), this.normalizedNames.delete(E);
          }
        }
        forEach(N) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((E) =>
              N(this.normalizedNames.get(E), this.headers.get(E))
            );
        }
      }
      class he {
        encodeKey(N) {
          return Re(N);
        }
        encodeValue(N) {
          return Re(N);
        }
        decodeKey(N) {
          return decodeURIComponent(N);
        }
        decodeValue(N) {
          return decodeURIComponent(N);
        }
      }
      const le = /%(\d[a-f0-9])/gi,
        Oe = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function Re(pe) {
        return encodeURIComponent(pe).replace(le, (N, E) => Oe[E] ?? N);
      }
      function Ue(pe) {
        return `${pe}`;
      }
      class je {
        constructor(N = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = N.encoder || new he()),
            N.fromString)
          ) {
            if (N.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function Ae(pe, N) {
              const E = new Map();
              return (
                pe.length > 0 &&
                  pe
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((I) => {
                      const k = I.indexOf("="),
                        [Y, Ce] =
                          -1 == k
                            ? [N.decodeKey(I), ""]
                            : [
                                N.decodeKey(I.slice(0, k)),
                                N.decodeValue(I.slice(k + 1)),
                              ],
                        Me = E.get(Y) || [];
                      Me.push(Ce), E.set(Y, Me);
                    }),
                E
              );
            })(N.fromString, this.encoder);
          } else
            N.fromObject
              ? ((this.map = new Map()),
                Object.keys(N.fromObject).forEach((E) => {
                  const U = N.fromObject[E],
                    I = Array.isArray(U) ? U.map(Ue) : [Ue(U)];
                  this.map.set(E, I);
                }))
              : (this.map = null);
        }
        has(N) {
          return this.init(), this.map.has(N);
        }
        get(N) {
          this.init();
          const E = this.map.get(N);
          return E ? E[0] : null;
        }
        getAll(N) {
          return this.init(), this.map.get(N) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(N, E) {
          return this.clone({ param: N, value: E, op: "a" });
        }
        appendAll(N) {
          const E = [];
          return (
            Object.keys(N).forEach((U) => {
              const I = N[U];
              Array.isArray(I)
                ? I.forEach((k) => {
                    E.push({ param: U, value: k, op: "a" });
                  })
                : E.push({ param: U, value: I, op: "a" });
            }),
            this.clone(E)
          );
        }
        set(N, E) {
          return this.clone({ param: N, value: E, op: "s" });
        }
        delete(N, E) {
          return this.clone({ param: N, value: E, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((N) => {
                const E = this.encoder.encodeKey(N);
                return this.map
                  .get(N)
                  .map((U) => E + "=" + this.encoder.encodeValue(U))
                  .join("&");
              })
              .filter((N) => "" !== N)
              .join("&")
          );
        }
        clone(N) {
          const E = new je({ encoder: this.encoder });
          return (
            (E.cloneFrom = this.cloneFrom || this),
            (E.updates = (this.updates || []).concat(N)),
            E
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((N) => this.map.set(N, this.cloneFrom.map.get(N))),
              this.updates.forEach((N) => {
                switch (N.op) {
                  case "a":
                  case "s":
                    const E =
                      ("a" === N.op ? this.map.get(N.param) : void 0) || [];
                    E.push(Ue(N.value)), this.map.set(N.param, E);
                    break;
                  case "d":
                    if (void 0 === N.value) {
                      this.map.delete(N.param);
                      break;
                    }
                    {
                      let U = this.map.get(N.param) || [];
                      const I = U.indexOf(Ue(N.value));
                      -1 !== I && U.splice(I, 1),
                        U.length > 0
                          ? this.map.set(N.param, U)
                          : this.map.delete(N.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class ce {
        constructor() {
          this.map = new Map();
        }
        set(N, E) {
          return this.map.set(N, E), this;
        }
        get(N) {
          return (
            this.map.has(N) || this.map.set(N, N.defaultValue()),
            this.map.get(N)
          );
        }
        delete(N) {
          return this.map.delete(N), this;
        }
        has(N) {
          return this.map.has(N);
        }
        keys() {
          return this.map.keys();
        }
      }
      function H(pe) {
        return typeof ArrayBuffer < "u" && pe instanceof ArrayBuffer;
      }
      function K(pe) {
        return typeof Blob < "u" && pe instanceof Blob;
      }
      function Ee(pe) {
        return typeof FormData < "u" && pe instanceof FormData;
      }
      class ae {
        constructor(N, E, U, I) {
          let k;
          if (
            ((this.url = E),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = N.toUpperCase()),
            (function De(pe) {
              switch (pe) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || I
              ? ((this.body = void 0 !== U ? U : null), (k = I))
              : (k = U),
            k &&
              ((this.reportProgress = !!k.reportProgress),
              (this.withCredentials = !!k.withCredentials),
              k.responseType && (this.responseType = k.responseType),
              k.headers && (this.headers = k.headers),
              k.context && (this.context = k.context),
              k.params && (this.params = k.params)),
            this.headers || (this.headers = new ie()),
            this.context || (this.context = new ce()),
            this.params)
          ) {
            const Y = this.params.toString();
            if (0 === Y.length) this.urlWithParams = E;
            else {
              const Ce = E.indexOf("?");
              this.urlWithParams =
                E + (-1 === Ce ? "?" : Ce < E.length - 1 ? "&" : "") + Y;
            }
          } else (this.params = new je()), (this.urlWithParams = E);
        }
        serializeBody() {
          return null === this.body
            ? null
            : H(this.body) ||
              K(this.body) ||
              Ee(this.body) ||
              (function ne(pe) {
                return (
                  typeof URLSearchParams < "u" && pe instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof je
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Ee(this.body)
            ? null
            : K(this.body)
            ? this.body.type || null
            : H(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof je
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(N = {}) {
          const E = N.method || this.method,
            U = N.url || this.url,
            I = N.responseType || this.responseType,
            k = void 0 !== N.body ? N.body : this.body,
            Y =
              void 0 !== N.withCredentials
                ? N.withCredentials
                : this.withCredentials,
            Ce =
              void 0 !== N.reportProgress
                ? N.reportProgress
                : this.reportProgress;
          let Me = N.headers || this.headers,
            pt = N.params || this.params;
          const gt = N.context ?? this.context;
          return (
            void 0 !== N.setHeaders &&
              (Me = Object.keys(N.setHeaders).reduce(
                (Zt, Le) => Zt.set(Le, N.setHeaders[Le]),
                Me
              )),
            N.setParams &&
              (pt = Object.keys(N.setParams).reduce(
                (Zt, Le) => Zt.set(Le, N.setParams[Le]),
                pt
              )),
            new ae(E, U, k, {
              params: pt,
              headers: Me,
              context: gt,
              reportProgress: Ce,
              responseType: I,
              withCredentials: Y,
            })
          );
        }
      }
      var Pe = (() => (
        ((Pe = Pe || {})[(Pe.Sent = 0)] = "Sent"),
        (Pe[(Pe.UploadProgress = 1)] = "UploadProgress"),
        (Pe[(Pe.ResponseHeader = 2)] = "ResponseHeader"),
        (Pe[(Pe.DownloadProgress = 3)] = "DownloadProgress"),
        (Pe[(Pe.Response = 4)] = "Response"),
        (Pe[(Pe.User = 5)] = "User"),
        Pe
      ))();
      class j {
        constructor(N, E = 200, U = "OK") {
          (this.headers = N.headers || new ie()),
            (this.status = void 0 !== N.status ? N.status : E),
            (this.statusText = N.statusText || U),
            (this.url = N.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class W extends j {
        constructor(N = {}) {
          super(N), (this.type = Pe.ResponseHeader);
        }
        clone(N = {}) {
          return new W({
            headers: N.headers || this.headers,
            status: void 0 !== N.status ? N.status : this.status,
            statusText: N.statusText || this.statusText,
            url: N.url || this.url || void 0,
          });
        }
      }
      class oe extends j {
        constructor(N = {}) {
          super(N),
            (this.type = Pe.Response),
            (this.body = void 0 !== N.body ? N.body : null);
        }
        clone(N = {}) {
          return new oe({
            body: void 0 !== N.body ? N.body : this.body,
            headers: N.headers || this.headers,
            status: void 0 !== N.status ? N.status : this.status,
            statusText: N.statusText || this.statusText,
            url: N.url || this.url || void 0,
          });
        }
      }
      class z extends j {
        constructor(N) {
          super(N, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${N.url || "(unknown url)"}`
                : `Http failure response for ${N.url || "(unknown url)"}: ${
                    N.status
                  } ${N.statusText}`),
            (this.error = N.error || null);
        }
      }
      function Te(pe, N) {
        return {
          body: N,
          headers: pe.headers,
          context: pe.context,
          observe: pe.observe,
          params: pe.params,
          reportProgress: pe.reportProgress,
          responseType: pe.responseType,
          withCredentials: pe.withCredentials,
        };
      }
      let fe = (() => {
        class pe {
          constructor(E) {
            this.handler = E;
          }
          request(E, U, I = {}) {
            let k;
            if (E instanceof ae) k = E;
            else {
              let Me, pt;
              (Me = I.headers instanceof ie ? I.headers : new ie(I.headers)),
                I.params &&
                  (pt =
                    I.params instanceof je
                      ? I.params
                      : new je({ fromObject: I.params })),
                (k = new ae(E, U, void 0 !== I.body ? I.body : null, {
                  headers: Me,
                  context: I.context,
                  params: pt,
                  reportProgress: I.reportProgress,
                  responseType: I.responseType || "json",
                  withCredentials: I.withCredentials,
                }));
            }
            const Y = (0, Z.of)(k).pipe(
              (0, c.b)((Me) => this.handler.handle(Me))
            );
            if (E instanceof ae || "events" === I.observe) return Y;
            const Ce = Y.pipe((0, we.h)((Me) => Me instanceof oe));
            switch (I.observe || "body") {
              case "body":
                switch (k.responseType) {
                  case "arraybuffer":
                    return Ce.pipe(
                      (0, _e.U)((Me) => {
                        if (
                          null !== Me.body &&
                          !(Me.body instanceof ArrayBuffer)
                        )
                          throw new Error("Response is not an ArrayBuffer.");
                        return Me.body;
                      })
                    );
                  case "blob":
                    return Ce.pipe(
                      (0, _e.U)((Me) => {
                        if (null !== Me.body && !(Me.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return Me.body;
                      })
                    );
                  case "text":
                    return Ce.pipe(
                      (0, _e.U)((Me) => {
                        if (null !== Me.body && "string" != typeof Me.body)
                          throw new Error("Response is not a string.");
                        return Me.body;
                      })
                    );
                  default:
                    return Ce.pipe((0, _e.U)((Me) => Me.body));
                }
              case "response":
                return Ce;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${I.observe}}`
                );
            }
          }
          delete(E, U = {}) {
            return this.request("DELETE", E, U);
          }
          get(E, U = {}) {
            return this.request("GET", E, U);
          }
          head(E, U = {}) {
            return this.request("HEAD", E, U);
          }
          jsonp(E, U) {
            return this.request("JSONP", E, {
              params: new je().append(U, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(E, U = {}) {
            return this.request("OPTIONS", E, U);
          }
          patch(E, U, I = {}) {
            return this.request("PATCH", E, Te(I, U));
          }
          post(E, U, I = {}) {
            return this.request("POST", E, Te(I, U));
          }
          put(E, U, I = {}) {
            return this.request("PUT", E, Te(I, U));
          }
        }
        return (
          (pe.ɵfac = function (E) {
            return new (E || pe)(w.LFG(Q));
          }),
          (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
          pe
        );
      })();
      class He {
        constructor(N, E) {
          (this.next = N), (this.interceptor = E);
        }
        handle(N) {
          return this.interceptor.intercept(N, this.next);
        }
      }
      const qe = new w.OlP("HTTP_INTERCEPTORS");
      let zt = (() => {
        class pe {
          intercept(E, U) {
            return U.handle(E);
          }
        }
        return (
          (pe.ɵfac = function (E) {
            return new (E || pe)();
          }),
          (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
          pe
        );
      })();
      const $n = /^\)\]\}',?\n/;
      let Sn = (() => {
        class pe {
          constructor(E) {
            this.xhrFactory = E;
          }
          handle(E) {
            if ("JSONP" === E.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new X.y((U) => {
              const I = this.xhrFactory.build();
              if (
                (I.open(E.method, E.urlWithParams),
                E.withCredentials && (I.withCredentials = !0),
                E.headers.forEach((Ot, Dt) =>
                  I.setRequestHeader(Ot, Dt.join(","))
                ),
                E.headers.has("Accept") ||
                  I.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !E.headers.has("Content-Type"))
              ) {
                const Ot = E.detectContentTypeHeader();
                null !== Ot && I.setRequestHeader("Content-Type", Ot);
              }
              if (E.responseType) {
                const Ot = E.responseType.toLowerCase();
                I.responseType = "json" !== Ot ? Ot : "text";
              }
              const k = E.serializeBody();
              let Y = null;
              const Ce = () => {
                  if (null !== Y) return Y;
                  const Ot = I.statusText || "OK",
                    Dt = new ie(I.getAllResponseHeaders()),
                    Kt =
                      (function Gn(pe) {
                        return "responseURL" in pe && pe.responseURL
                          ? pe.responseURL
                          : /^X-Request-URL:/m.test(pe.getAllResponseHeaders())
                          ? pe.getResponseHeader("X-Request-URL")
                          : null;
                      })(I) || E.url;
                  return (
                    (Y = new W({
                      headers: Dt,
                      status: I.status,
                      statusText: Ot,
                      url: Kt,
                    })),
                    Y
                  );
                },
                Me = () => {
                  let {
                      headers: Ot,
                      status: Dt,
                      statusText: Kt,
                      url: nt,
                    } = Ce(),
                    St = null;
                  204 !== Dt &&
                    (St =
                      typeof I.response > "u" ? I.responseText : I.response),
                    0 === Dt && (Dt = St ? 200 : 0);
                  let Je = Dt >= 200 && Dt < 300;
                  if ("json" === E.responseType && "string" == typeof St) {
                    const ln = St;
                    St = St.replace($n, "");
                    try {
                      St = "" !== St ? JSON.parse(St) : null;
                    } catch (dn) {
                      (St = ln),
                        Je && ((Je = !1), (St = { error: dn, text: St }));
                    }
                  }
                  Je
                    ? (U.next(
                        new oe({
                          body: St,
                          headers: Ot,
                          status: Dt,
                          statusText: Kt,
                          url: nt || void 0,
                        })
                      ),
                      U.complete())
                    : U.error(
                        new z({
                          error: St,
                          headers: Ot,
                          status: Dt,
                          statusText: Kt,
                          url: nt || void 0,
                        })
                      );
                },
                pt = (Ot) => {
                  const { url: Dt } = Ce(),
                    Kt = new z({
                      error: Ot,
                      status: I.status || 0,
                      statusText: I.statusText || "Unknown Error",
                      url: Dt || void 0,
                    });
                  U.error(Kt);
                };
              let gt = !1;
              const Zt = (Ot) => {
                  gt || (U.next(Ce()), (gt = !0));
                  let Dt = { type: Pe.DownloadProgress, loaded: Ot.loaded };
                  Ot.lengthComputable && (Dt.total = Ot.total),
                    "text" === E.responseType &&
                      !!I.responseText &&
                      (Dt.partialText = I.responseText),
                    U.next(Dt);
                },
                Le = (Ot) => {
                  let Dt = { type: Pe.UploadProgress, loaded: Ot.loaded };
                  Ot.lengthComputable && (Dt.total = Ot.total), U.next(Dt);
                };
              return (
                I.addEventListener("load", Me),
                I.addEventListener("error", pt),
                I.addEventListener("timeout", pt),
                I.addEventListener("abort", pt),
                E.reportProgress &&
                  (I.addEventListener("progress", Zt),
                  null !== k &&
                    I.upload &&
                    I.upload.addEventListener("progress", Le)),
                I.send(k),
                U.next({ type: Pe.Sent }),
                () => {
                  I.removeEventListener("error", pt),
                    I.removeEventListener("abort", pt),
                    I.removeEventListener("load", Me),
                    I.removeEventListener("timeout", pt),
                    E.reportProgress &&
                      (I.removeEventListener("progress", Zt),
                      null !== k &&
                        I.upload &&
                        I.upload.removeEventListener("progress", Le)),
                    I.readyState !== I.DONE && I.abort();
                }
              );
            });
          }
        }
        return (
          (pe.ɵfac = function (E) {
            return new (E || pe)(w.LFG(f.JF));
          }),
          (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
          pe
        );
      })();
      const Mt = new w.OlP("XSRF_COOKIE_NAME"),
        An = new w.OlP("XSRF_HEADER_NAME");
      class sn {}
      let Xt = (() => {
          class pe {
            constructor(E, U, I) {
              (this.doc = E),
                (this.platform = U),
                (this.cookieName = I),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const E = this.doc.cookie || "";
              return (
                E !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, f.Mx)(E, this.cookieName)),
                  (this.lastCookieString = E)),
                this.lastToken
              );
            }
          }
          return (
            (pe.ɵfac = function (E) {
              return new (E || pe)(w.LFG(f.K0), w.LFG(w.Lbi), w.LFG(Mt));
            }),
            (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
            pe
          );
        })(),
        Tn = (() => {
          class pe {
            constructor(E, U) {
              (this.tokenService = E), (this.headerName = U);
            }
            intercept(E, U) {
              const I = E.url.toLowerCase();
              if (
                "GET" === E.method ||
                "HEAD" === E.method ||
                I.startsWith("http://") ||
                I.startsWith("https://")
              )
                return U.handle(E);
              const k = this.tokenService.getToken();
              return (
                null !== k &&
                  !E.headers.has(this.headerName) &&
                  (E = E.clone({ headers: E.headers.set(this.headerName, k) })),
                U.handle(E)
              );
            }
          }
          return (
            (pe.ɵfac = function (E) {
              return new (E || pe)(w.LFG(sn), w.LFG(An));
            }),
            (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
            pe
          );
        })(),
        Be = (() => {
          class pe {
            constructor(E, U) {
              (this.backend = E), (this.injector = U), (this.chain = null);
            }
            handle(E) {
              if (null === this.chain) {
                const U = this.injector.get(qe, []);
                this.chain = U.reduceRight(
                  (I, k) => new He(I, k),
                  this.backend
                );
              }
              return this.chain.handle(E);
            }
          }
          return (
            (pe.ɵfac = function (E) {
              return new (E || pe)(w.LFG(se), w.LFG(w.zs3));
            }),
            (pe.ɵprov = w.Yz7({ token: pe, factory: pe.ɵfac })),
            pe
          );
        })(),
        Ut = (() => {
          class pe {
            static disable() {
              return {
                ngModule: pe,
                providers: [{ provide: Tn, useClass: zt }],
              };
            }
            static withOptions(E = {}) {
              return {
                ngModule: pe,
                providers: [
                  E.cookieName ? { provide: Mt, useValue: E.cookieName } : [],
                  E.headerName ? { provide: An, useValue: E.headerName } : [],
                ],
              };
            }
          }
          return (
            (pe.ɵfac = function (E) {
              return new (E || pe)();
            }),
            (pe.ɵmod = w.oAB({ type: pe })),
            (pe.ɵinj = w.cJS({
              providers: [
                Tn,
                { provide: qe, useExisting: Tn, multi: !0 },
                { provide: sn, useClass: Xt },
                { provide: Mt, useValue: "XSRF-TOKEN" },
                { provide: An, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            pe
          );
        })(),
        _n = (() => {
          class pe {}
          return (
            (pe.ɵfac = function (E) {
              return new (E || pe)();
            }),
            (pe.ɵmod = w.oAB({ type: pe })),
            (pe.ɵinj = w.cJS({
              providers: [
                fe,
                { provide: Q, useClass: Be },
                Sn,
                { provide: se, useExisting: Sn },
              ],
              imports: [
                Ut.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN",
                }),
              ],
            })),
            pe
          );
        })();
    },
    8256: (Ze, me, x) => {
      x.d(me, {
        tb: () => Rg,
        AFp: () => Pg,
        ip1: () => Og,
        CZH: () => nl,
        hGG: () => yw,
        z2F: () => ol,
        sBO: () => rw,
        Sil: () => V0,
        _Vd: () => Vs,
        EJc: () => k0,
        Xts: () => Vl,
        SBq: () => Bs,
        lqb: () => Ci,
        qLn: () => Us,
        vpe: () => no,
        XFs: () => N,
        OlP: () => Tt,
        zs3: () => wi,
        ZZ4: () => xc,
        aQg: () => Oc,
        soG: () => rl,
        YKP: () => Lp,
        h0i: () => ms,
        PXZ: () => K0,
        R0b: () => Cr,
        FiY: () => Os,
        Lbi: () => F0,
        g9A: () => Ng,
        Qsj: () => g_,
        FYo: () => Md,
        JOm: () => Kr,
        tp0: () => Ps,
        Rgc: () => na,
        dDg: () => W0,
        eoX: () => jg,
        GfV: () => Sd,
        s_b: () => Xa,
        ifc: () => Zt,
        MMx: () => ic,
        Lck: () => AD,
        eFA: () => zg,
        G48: () => nw,
        Gpc: () => ht,
        f3M: () => Yc,
        _c5: () => vw,
        c2e: () => N0,
        zSh: () => Hl,
        wAp: () => Qe,
        vHH: () => K,
        lri: () => Ug,
        rWj: () => Hg,
        D6c: () => Cw,
        cg1: () => Ku,
        kL8: () => lp,
        dqk: () => Le,
        Z0I: () => Tn,
        sIi: () => Zs,
        CqO: () => hh,
        QGY: () => zu,
        QP$: () => $e,
        F4k: () => fh,
        RDi: () => Tm,
        AaK: () => Re,
        qOj: () => Vu,
        TTD: () => Ar,
        _Bn: () => kp,
        jDz: () => Bp,
        xp6: () => uf,
        uIk: () => Hu,
        ekj: () => Yu,
        Suo: () => lg,
        Xpm: () => Zn,
        lG2: () => q,
        Yz7: () => Mt,
        cJS: () => sn,
        oAB: () => kn,
        Yjl: () => B,
        Y36: () => ts,
        _UZ: () => Gu,
        BQk: () => za,
        ynx: () => Ga,
        qZA: () => $a,
        TgZ: () => ja,
        EpF: () => dh,
        n5z: () => gi,
        LFG: () => un,
        $8M: () => pa,
        $Z: () => wf,
        NdJ: () => Zu,
        CRH: () => ug,
        oxw: () => vh,
        ALo: () => Xp,
        xi3: () => eg,
        Dn7: () => tg,
        Q6J: () => ju,
        DdM: () => Zp,
        VKq: () => Wp,
        iGM: () => ag,
        MAs: () => uh,
        KtG: () => si,
        CHM: () => mr,
        LSH: () => Ll,
        YNc: () => lh,
        _uU: () => jh,
        Oqu: () => Ju,
        hij: () => Wa,
      });
      var f = x(7579),
        w = x(727),
        Z = x(9751),
        X = x(8189),
        c = x(8421),
        we = x(515),
        _e = x(7669),
        Q = x(2076),
        ie = x(2961),
        G = x(4482);
      function Ae(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const r = new ie.Hp({
          next: () => {
            r.unsubscribe(), e();
          },
        });
        return t(...n).subscribe(r);
      }
      function le(e) {
        for (let t in e) if (e[t] === le) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Oe(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Re(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Re).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Ue(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const je = le({ __forward_ref__: le });
      function ht(e) {
        return (
          (e.__forward_ref__ = ht),
          (e.toString = function () {
            return Re(this());
          }),
          e
        );
      }
      function ce(e) {
        return De(e) ? e() : e;
      }
      function De(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(je) &&
          e.__forward_ref__ === ht
        );
      }
      class K extends Error {
        constructor(t, n) {
          super(
            (function Ee(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function ne(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function oe(e, t) {
        throw new K(-201, !1);
      }
      function ut(e, t) {
        null == e &&
          (function tt(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function Mt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function sn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Xt(e) {
        return Be(e, _n) || Be(e, kt);
      }
      function Tn(e) {
        return null !== Xt(e);
      }
      function Be(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ut(e) {
        return e && (e.hasOwnProperty(ir) || e.hasOwnProperty(pe))
          ? e[ir]
          : null;
      }
      const _n = le({ ɵprov: le }),
        ir = le({ ɵinj: le }),
        kt = le({ ngInjectableDef: le }),
        pe = le({ ngInjectorDef: le });
      var N = (() => (
        ((N = N || {})[(N.Default = 0)] = "Default"),
        (N[(N.Host = 1)] = "Host"),
        (N[(N.Self = 2)] = "Self"),
        (N[(N.SkipSelf = 4)] = "SkipSelf"),
        (N[(N.Optional = 8)] = "Optional"),
        N
      ))();
      let E;
      function I(e) {
        const t = E;
        return (E = e), t;
      }
      function k(e, t, n) {
        const r = Xt(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & N.Optional
          ? null
          : void 0 !== t
          ? t
          : void oe(Re(e));
      }
      function Ce(e) {
        return { toString: e }.toString();
      }
      var Me = (() => (
          ((Me = Me || {})[(Me.OnPush = 0)] = "OnPush"),
          (Me[(Me.Default = 1)] = "Default"),
          Me
        ))(),
        Zt = (() => {
          return (
            ((e = Zt || (Zt = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            Zt
          );
          var e;
        })();
      const Le = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        Kt = {},
        nt = [],
        St = le({ ɵcmp: le }),
        Je = le({ ɵdir: le }),
        ln = le({ ɵpipe: le }),
        dn = le({ ɵmod: le }),
        Ft = le({ ɵfac: le }),
        vn = le({ __NG_ELEMENT_ID__: le });
      let zn = 0;
      function Zn(e) {
        return Ce(() => {
          const n = !0 === e.standalone,
            r = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Me.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || nt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Zt.Emulated,
              id: "c" + zn++,
              styles: e.styles || nt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.dependencies,
            a = e.features;
          return (
            (o.inputs = Dr(e.inputs, r)),
            (o.outputs = Dr(e.outputs)),
            a && a.forEach((d) => d(o)),
            (o.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Wn).filter(Yn)
              : null),
            (o.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(ue).filter(Yn)
              : null),
            o
          );
        });
      }
      function Wn(e) {
        return F(e) || J(e);
      }
      function Yn(e) {
        return null !== e;
      }
      function kn(e) {
        return Ce(() => ({
          type: e.type,
          bootstrap: e.bootstrap || nt,
          declarations: e.declarations || nt,
          imports: e.imports || nt,
          exports: e.exports || nt,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Dr(e, t) {
        if (null == e) return Kt;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      const q = Zn;
      function B(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function F(e) {
        return e[St] || null;
      }
      function J(e) {
        return e[Je] || null;
      }
      function ue(e) {
        return e[ln] || null;
      }
      function $e(e) {
        const t = F(e) || J(e) || ue(e);
        return null !== t && t.standalone;
      }
      function We(e, t) {
        const n = e[dn] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Re(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function tn(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function jt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function io(e) {
        return 0 != (8 & e.flags);
      }
      function Vt(e) {
        return 2 == (2 & e.flags);
      }
      function Xn(e) {
        return 1 == (1 & e.flags);
      }
      function pn(e) {
        return null !== e.template;
      }
      function Eo(e) {
        return 0 != (256 & e[2]);
      }
      function Vn(e, t) {
        return e.hasOwnProperty(Ft) ? e[Ft] : null;
      }
      class Sr {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Ar() {
        return Ur;
      }
      function Ur(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = lo), Tr;
      }
      function Tr() {
        const e = Io(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === Kt) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function lo(e, t, n, r) {
        const o =
            Io(e) ||
            (function Hr(e, t) {
              return (e[uo] = t);
            })(e, { previous: Kt, current: null }),
          i = o.current || (o.current = {}),
          a = o.previous,
          d = this.declaredInputs[n],
          p = a[d];
        (i[d] = new Sr(p && p.currentValue, t, a === Kt)), (e[r] = t);
      }
      Ar.ngInherit = !0;
      const uo = "__ngSimpleChanges__";
      function Io(e) {
        return e[uo] || null;
      }
      function ot(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function ho(e, t) {
        return ot(t[e]);
      }
      function rn(e, t) {
        return ot(t[e.index]);
      }
      function zr(e, t) {
        return e.data[t];
      }
      function Ir(e, t) {
        return e[t];
      }
      function wn(e, t) {
        const n = t[e];
        return tn(n) ? n : n[0];
      }
      function po(e) {
        return 64 == (64 & e[2]);
      }
      function tr(e, t) {
        return null == t ? null : e[t];
      }
      function lr(e) {
        e[18] = 0;
      }
      function Oo(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Ke = { lFrame: ge(null), bindingsEnabled: !0 };
      function Fo() {
        return Ke.bindingsEnabled;
      }
      function ve() {
        return Ke.lFrame.lView;
      }
      function st() {
        return Ke.lFrame.tView;
      }
      function mr(e) {
        return (Ke.lFrame.contextLView = e), e[8];
      }
      function si(e) {
        return (Ke.lFrame.contextLView = null), e;
      }
      function C() {
        let e = y();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function y() {
        return Ke.lFrame.currentTNode;
      }
      function T(e, t) {
        const n = Ke.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function re() {
        return Ke.lFrame.isParent;
      }
      function Ve() {
        Ke.lFrame.isParent = !1;
      }
      function Yt() {
        const e = Ke.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function nr() {
        return Ke.lFrame.bindingIndex++;
      }
      function oa(e, t) {
        const n = Ke.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Ri(t);
      }
      function Ri(e) {
        Ke.lFrame.currentDirectiveIndex = e;
      }
      function g() {
        return Ke.lFrame.currentQueryIndex;
      }
      function b(e) {
        Ke.lFrame.currentQueryIndex = e;
      }
      function _(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function A(e, t, n) {
        if (n & N.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & N.Host ||
              ((o = _(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (Ke.lFrame = te());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function L(e) {
        const t = te(),
          n = e[1];
        (Ke.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function te() {
        const e = Ke.lFrame,
          t = null === e ? null : e.child;
        return null === t ? ge(e) : t;
      }
      function ge(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Ne() {
        const e = Ke.lFrame;
        return (
          (Ke.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const vt = Ne;
      function _t() {
        const e = Ne();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function ct() {
        return Ke.lFrame.selectedIndex;
      }
      function mt(e) {
        Ke.lFrame.selectedIndex = e;
      }
      function at() {
        const e = Ke.lFrame;
        return zr(e.tView, e.selectedIndex);
      }
      function mo(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: a,
              ngAfterContentChecked: d,
              ngAfterViewInit: p,
              ngAfterViewChecked: D,
              ngOnDestroy: S,
            } = i;
          a && (e.contentHooks || (e.contentHooks = [])).push(-n, a),
            d &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, d),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)),
            p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
            D &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, D),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, D)),
            null != S && (e.destroyHooks || (e.destroyHooks = [])).push(n, S);
        }
      }
      function Li(e, t, n) {
        li(e, t, 3, n);
      }
      function Vi(e, t, n, r) {
        (3 & e[2]) === n && li(e, t, n, r);
      }
      function ws(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function li(e, t, n, r) {
        const i = r ?? -1,
          a = t.length - 1;
        let d = 0;
        for (let p = void 0 !== r ? 65535 & e[18] : 0; p < a; p++)
          if ("number" == typeof t[p + 1]) {
            if (((d = t[p]), null != r && d >= r)) break;
          } else
            t[p] < 0 && (e[18] += 65536),
              (d < i || -1 == i) &&
                (ll(e, n, t, p), (e[18] = (4294901760 & e[18]) + p + 2)),
              p++;
      }
      function ll(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          d = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(d);
            } finally {
            }
          }
        } else
          try {
            i.call(d);
          } finally {
          }
      }
      class ui {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function di(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ("number" == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              a = n[r++],
              d = n[r++];
            e.setAttribute(t, a, d, i);
          } else {
            const i = o,
              a = n[++r];
            Ms(i) ? e.setProperty(t, i, a) : e.setAttribute(t, i, a), r++;
          }
        }
        return r;
      }
      function Es(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Ms(e) {
        return 64 === e.charCodeAt(0);
      }
      function Bi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  aa(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function aa(e, t, n, r, o) {
        let i = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; i < e.length; ) {
            const d = e[i++];
            if ("number" == typeof d) {
              if (d === t) {
                a = -1;
                break;
              }
              if (d > t) {
                a = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const d = e[i];
          if ("number" == typeof d) break;
          if (d === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== a && (e.splice(a, 0, t), (i = a + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function la(e) {
        return -1 !== e;
      }
      function Ro(e) {
        return 32767 & e;
      }
      function ko(e, t) {
        let n = (function pl(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let Ui = !0;
      function Lo(e) {
        const t = Ui;
        return (Ui = e), t;
      }
      let _l = 0;
      const vr = {};
      function fi(e, t) {
        const n = Hi(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Vo(r.data, e),
          Vo(t, null),
          Vo(r.blueprint, null));
        const o = Bo(e, t),
          i = e.injectorIndex;
        if (la(o)) {
          const a = Ro(o),
            d = ko(o, t),
            p = d[1].data;
          for (let D = 0; D < 8; D++) t[i + D] = d[a + D] | p[a + D];
        }
        return (t[i + 8] = o), i;
      }
      function Vo(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Hi(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Bo(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = As(o)), null === r)) return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Uo(e, t, n) {
        !(function vl(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(vn) && (r = n[vn]),
            null == r && (r = n[vn] = _l++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function ua(e, t, n) {
        if (n & N.Optional || void 0 !== e) return e;
        oe();
      }
      function hi(e, t, n, r) {
        if (
          (n & N.Optional && void 0 === r && (r = null),
          0 == (n & (N.Self | N.Host)))
        ) {
          const o = e[9],
            i = I(void 0);
          try {
            return o ? o.get(t, r, n & N.Optional) : k(t, r, n & N.Optional);
          } finally {
            I(i);
          }
        }
        return ua(r, 0, n);
      }
      function ca(e, t, n, r = N.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const a = (function Dl(e, t, n, r, o) {
              let i = e,
                a = t;
              for (
                ;
                null !== i && null !== a && 1024 & a[2] && !(256 & a[2]);

              ) {
                const d = da(i, a, n, r | N.Self, vr);
                if (d !== vr) return d;
                let p = i.parent;
                if (!p) {
                  const D = a[21];
                  if (D) {
                    const S = D.get(n, vr, r);
                    if (S !== vr) return S;
                  }
                  (p = As(a)), (a = a[15]);
                }
                i = p;
              }
              return o;
            })(e, t, n, r, vr);
            if (a !== vr) return a;
          }
          const i = da(e, t, n, r, vr);
          if (i !== vr) return i;
        }
        return hi(t, n, r, o);
      }
      function da(e, t, n, r, o) {
        const i = (function fa(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(vn) ? e[vn] : void 0;
          return "number" == typeof t ? (t >= 0 ? 255 & t : $i) : t;
        })(n);
        if ("function" == typeof i) {
          if (!A(t, e, r)) return r & N.Host ? ua(o, 0, r) : hi(t, n, r, o);
          try {
            const a = i(r);
            if (null != a || r & N.Optional) return a;
            oe();
          } finally {
            vt();
          }
        } else if ("number" == typeof i) {
          let a = null,
            d = Hi(e, t),
            p = -1,
            D = r & N.Host ? t[16][6] : null;
          for (
            (-1 === d || r & N.SkipSelf) &&
            ((p = -1 === d ? Bo(e, t) : t[d + 8]),
            -1 !== p && ha(r, !1)
              ? ((a = t[1]), (d = Ro(p)), (t = ko(p, t)))
              : (d = -1));
            -1 !== d;

          ) {
            const S = t[1];
            if (on(i, d, S.data)) {
              const O = Cl(d, t, n, a, r, D);
              if (O !== vr) return O;
            }
            (p = t[d + 8]),
              -1 !== p && ha(r, t[1].data[d + 8] === D) && on(i, d, t)
                ? ((a = S), (d = Ro(p)), (t = ko(p, t)))
                : (d = -1);
          }
        }
        return o;
      }
      function Cl(e, t, n, r, o, i) {
        const a = t[1],
          d = a.data[e + 8],
          S = ji(
            d,
            a,
            n,
            null == r ? Vt(d) && Ui : r != a && 0 != (3 & d.type),
            o & N.Host && i === d
          );
        return null !== S ? pi(t, a, S, d) : vr;
      }
      function ji(e, t, n, r, o) {
        const i = e.providerIndexes,
          a = t.data,
          d = 1048575 & i,
          p = e.directiveStart,
          S = i >> 20,
          V = o ? d + S : e.directiveEnd;
        for (let $ = r ? d : d + S; $ < V; $++) {
          const de = a[$];
          if (($ < p && n === de) || ($ >= p && de.type === n)) return $;
        }
        if (o) {
          const $ = a[p];
          if ($ && pn($) && $.type === n) return p;
        }
        return null;
      }
      function pi(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function ul(e) {
            return e instanceof ui;
          })(o)
        ) {
          const a = o;
          a.resolving &&
            (function Pe(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new K(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function ae(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : ne(e);
              })(i[n])
            );
          const d = Lo(a.canSeeViewProviders);
          a.resolving = !0;
          const p = a.injectImpl ? I(a.injectImpl) : null;
          A(e, r, N.Default);
          try {
            (o = e[n] = a.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function ai(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const a = Ur(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, a);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== p && I(p), Lo(d), (a.resolving = !1), vt();
          }
        }
        return o;
      }
      function on(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function ha(e, t) {
        return !(e & N.Self || (e & N.Host && t));
      }
      class _o {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return ca(this._tNode, this._lView, t, r, n);
        }
      }
      function $i() {
        return new _o(C(), ve());
      }
      function gi(e) {
        return Ce(() => {
          const t = e.prototype.constructor,
            n = t[Ft] || Gi(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Ft] || Gi(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function Gi(e) {
        return De(e)
          ? () => {
              const t = Gi(ce(e));
              return t && t();
            }
          : Vn(e);
      }
      function As(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function pa(e) {
        return (function yl(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (Es(i)) break;
              if (0 === i) o += 2;
              else if ("number" == typeof i)
                for (o++; o < r && "string" == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(C(), e);
      }
      const Ho = "__parameters__";
      function _i(e, t, n) {
        return Ce(() => {
          const r = (function jo(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const a = new o(...i);
            return (d.annotation = a), d;
            function d(p, D, S) {
              const O = p.hasOwnProperty(Ho)
                ? p[Ho]
                : Object.defineProperty(p, Ho, { value: [] })[Ho];
              for (; O.length <= S; ) O.push(null);
              return (O[S] = O[S] || []).push(a), p;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class Tt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Mt({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Un(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), Un(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Fr(e, t) {
        e.forEach((n) => (Array.isArray(n) ? Fr(n, t) : t(n)));
      }
      function _a(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function zi(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function s(e, t, n) {
        let r = v(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Sl(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function h(e, t) {
        const n = v(e, t);
        if (n >= 0) return e[1 | n];
      }
      function v(e, t) {
        return (function P(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              a = e[i << n];
            if (t === a) return i << n;
            a > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Mn = {},
        Zi = "__NG_DI_FLAG__",
        Jr = "ngTempTokenPath",
        hm = /\n/gm,
        Zc = "__source";
      let Is;
      function Wi(e) {
        const t = Is;
        return (Is = e), t;
      }
      function gm(e, t = N.Default) {
        if (void 0 === Is) throw new K(-203, !1);
        return null === Is
          ? k(e, void 0, t)
          : Is.get(e, t & N.Optional ? null : void 0, t);
      }
      function un(e, t = N.Default) {
        return (
          (function U() {
            return E;
          })() || gm
        )(ce(e), t);
      }
      function Yc(e, t = N.Default) {
        return (
          "number" != typeof t &&
            (t =
              0 |
              (t.optional && 8) |
              (t.host && 1) |
              (t.self && 2) |
              (t.skipSelf && 4)),
          un(e, t)
        );
      }
      function Tl(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = ce(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new K(900, !1);
            let o,
              i = N.Default;
            for (let a = 0; a < r.length; a++) {
              const d = r[a],
                p = mm(d);
              "number" == typeof p
                ? -1 === p
                  ? (o = d.token)
                  : (i |= p)
                : (o = d);
            }
            t.push(un(o, i));
          } else t.push(un(r));
        }
        return t;
      }
      function xs(e, t) {
        return (e[Zi] = t), (e.prototype[Zi] = t), e;
      }
      function mm(e) {
        return e[Zi];
      }
      const Os = xs(_i("Optional"), 8),
        Ps = xs(_i("SkipSelf"), 4);
      let xl;
      function Tm(e) {
        xl = e;
      }
      class sd {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function Wo(e) {
        return e instanceof sd ? e.changingThisBreaksApplicationSecurity : e;
      }
      const Um =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var cn = (() => (
        ((cn = cn || {})[(cn.NONE = 0)] = "NONE"),
        (cn[(cn.HTML = 1)] = "HTML"),
        (cn[(cn.STYLE = 2)] = "STYLE"),
        (cn[(cn.SCRIPT = 3)] = "SCRIPT"),
        (cn[(cn.URL = 4)] = "URL"),
        (cn[(cn.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        cn
      ))();
      function Ll(e) {
        const t = (function Ls() {
          const e = ve();
          return e && e[12];
        })();
        return t
          ? t.sanitize(cn.URL, e) || ""
          : (function Rs(e, t) {
              const n = (function km(e) {
                return (e instanceof sd && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, "URL")
          ? Wo(e)
          : (function Fl(e) {
              return (e = String(e)).match(Um) ? e : "unsafe:" + e;
            })(ne(e));
      }
      const Vl = new Tt("ENVIRONMENT_INITIALIZER"),
        pd = new Tt("INJECTOR", -1),
        gd = new Tt("INJECTOR_DEF_TYPES");
      class md {
        get(t, n = Mn) {
          if (n === Mn) {
            const r = new Error(`NullInjectorError: No provider for ${Re(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      function e_(...e) {
        return { ɵproviders: _d(0, e) };
      }
      function _d(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        return (
          Fr(t, (i) => {
            const a = i;
            Bl(a, n, [], r) && (o || (o = []), o.push(a));
          }),
          void 0 !== o && vd(o, n),
          n
        );
      }
      function vd(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          Fr(o, (i) => {
            t.push(i);
          });
        }
      }
      function Bl(e, t, n, r) {
        if (!(e = ce(e))) return !1;
        let o = null,
          i = Ut(e);
        const a = !i && F(e);
        if (i || a) {
          if (a && !a.standalone) return !1;
          o = e;
        } else {
          const p = e.ngModule;
          if (((i = Ut(p)), !i)) return !1;
          o = p;
        }
        const d = r.has(o);
        if (a) {
          if (d) return !1;
          if ((r.add(o), a.dependencies)) {
            const p =
              "function" == typeof a.dependencies
                ? a.dependencies()
                : a.dependencies;
            for (const D of p) Bl(D, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !d) {
              let D;
              r.add(o);
              try {
                Fr(i.imports, (S) => {
                  Bl(S, t, n, r) && (D || (D = []), D.push(S));
                });
              } finally {
              }
              void 0 !== D && vd(D, t);
            }
            if (!d) {
              const D = Vn(o) || (() => new o());
              t.push(
                { provide: o, useFactory: D, deps: nt },
                { provide: gd, useValue: o, multi: !0 },
                { provide: Vl, useValue: () => un(o), multi: !0 }
              );
            }
            const p = i.providers;
            null == p ||
              d ||
              Fr(p, (S) => {
                t.push(S);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      const t_ = le({ provide: String, useValue: le });
      function Ul(e) {
        return null !== e && "object" == typeof e && t_ in e;
      }
      function yi(e) {
        return "function" == typeof e;
      }
      const Hl = new Tt("Set Injector scope."),
        Ma = {},
        r_ = {};
      let jl;
      function Sa() {
        return void 0 === jl && (jl = new md()), jl;
      }
      class Ci {}
      class Dd extends Ci {
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Gl(t, (a) => this.processProvider(a)),
            this.records.set(pd, Ji(void 0, this)),
            o.has("environment") && this.records.set(Ci, Ji(void 0, this));
          const i = this.records.get(Hl);
          null != i && "string" == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(gd.multi, nt, N.Self)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = Wi(this),
            r = I(void 0);
          try {
            return t();
          } finally {
            Wi(n), I(r);
          }
        }
        get(t, n = Mn, r = N.Default) {
          this.assertNotDestroyed();
          const o = Wi(this),
            i = I(void 0);
          try {
            if (!(r & N.SkipSelf)) {
              let d = this.records.get(t);
              if (void 0 === d) {
                const p =
                  (function l_(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof Tt)
                    );
                  })(t) && Xt(t);
                (d = p && this.injectableDefInScope(p) ? Ji($l(t), Ma) : null),
                  this.records.set(t, d);
              }
              if (null != d) return this.hydrate(t, d);
            }
            return (r & N.Self ? Sa() : this.parent).get(
              t,
              (n = r & N.Optional && n === Mn ? null : n)
            );
          } catch (a) {
            if ("NullInjectorError" === a.name) {
              if (((a[Jr] = a[Jr] || []).unshift(Re(t)), o)) throw a;
              return (function _m(e, t, n, r) {
                const o = e[Jr];
                throw (
                  (t[Zc] && o.unshift(t[Zc]),
                  (e.message = (function vm(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = Re(t);
                    if (Array.isArray(t)) o = t.map(Re).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let a in t)
                        if (t.hasOwnProperty(a)) {
                          let d = t[a];
                          i.push(
                            a +
                              ":" +
                              ("string" == typeof d ? JSON.stringify(d) : Re(d))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      hm,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[Jr] = null),
                  e)
                );
              })(a, t, "R3InjectorError", this.source);
            }
            throw a;
          } finally {
            I(i), Wi(o);
          }
        }
        resolveInjectorInitializers() {
          const t = Wi(this),
            n = I(void 0);
          try {
            const r = this.get(Vl.multi, nt, N.Self);
            for (const o of r) o();
          } finally {
            Wi(t), I(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Re(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new K(205, !1);
        }
        processProvider(t) {
          let n = yi((t = ce(t))) ? t : ce(t && t.provide);
          const r = (function i_(e) {
            return Ul(e) ? Ji(void 0, e.useValue) : Ji(wd(e), Ma);
          })(t);
          if (yi(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = Ji(void 0, Ma, !0)),
              (o.factory = () => Tl(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          return (
            n.value === Ma && ((n.value = r_), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function a_(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = ce(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function $l(e) {
        const t = Xt(e),
          n = null !== t ? t.factory : Vn(e);
        if (null !== n) return n;
        if (e instanceof Tt) throw new K(204, !1);
        if (e instanceof Function)
          return (function o_(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function vi(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new K(204, !1))
              );
            const n = (function an(e) {
              const t = e && (e[_n] || e[kt]);
              if (t) {
                const n = (function Rt(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new K(204, !1);
      }
      function wd(e, t, n) {
        let r;
        if (yi(e)) {
          const o = ce(e);
          return Vn(o) || $l(o);
        }
        if (Ul(e)) r = () => ce(e.useValue);
        else if (
          (function Cd(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Tl(e.deps || []));
        else if (
          (function yd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => un(ce(e.useExisting));
        else {
          const o = ce(e && (e.useClass || e.provide));
          if (
            !(function s_(e) {
              return !!e.deps;
            })(e)
          )
            return Vn(o) || $l(o);
          r = () => new o(...Tl(e.deps));
        }
        return r;
      }
      function Ji(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function u_(e) {
        return !!e.ɵproviders;
      }
      function Gl(e, t) {
        for (const n of e)
          Array.isArray(n) ? Gl(n, t) : u_(n) ? Gl(n.ɵproviders, t) : t(n);
      }
      class bd {}
      class f_ {
        resolveComponentFactory(t) {
          throw (function d_(e) {
            const t = Error(
              `No component factory found for ${Re(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Vs = (() => {
        class e {}
        return (e.NULL = new f_()), e;
      })();
      function h_() {
        return Ki(C(), ve());
      }
      function Ki(e, t) {
        return new Bs(rn(e, t));
      }
      let Bs = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = h_), e;
      })();
      function p_(e) {
        return e instanceof Bs ? e.nativeElement : e;
      }
      class Md {}
      let g_ = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function m_() {
                const e = ve(),
                  n = wn(C().index, e);
                return (tn(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        __ = (() => {
          class e {}
          return (
            (e.ɵprov = Mt({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class Sd {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const v_ = new Sd("14.2.3"),
        zl = {};
      function Jl(e) {
        return e.ngOriginalError;
      }
      class Us {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Jl(t);
          for (; n && Jl(n); ) n = Jl(n);
          return n || null;
        }
      }
      const Kl = new Map();
      let x_ = 0;
      const Xl = "__ngContext__";
      function Nn(e, t) {
        tn(t)
          ? ((e[Xl] = t[20]),
            (function P_(e) {
              Kl.set(e[20], e);
            })(t))
          : (e[Xl] = t);
      }
      function yo(e) {
        return e instanceof Function ? e() : e;
      }
      var Kr = (() => (
        ((Kr = Kr || {})[(Kr.Important = 1)] = "Important"),
        (Kr[(Kr.DashCase = 2)] = "DashCase"),
        Kr
      ))();
      function tu(e, t) {
        return undefined(e, t);
      }
      function js(e) {
        const t = e[3];
        return jt(t) ? t[3] : t;
      }
      function nu(e) {
        return Ud(e[13]);
      }
      function ru(e) {
        return Ud(e[4]);
      }
      function Ud(e) {
        for (; null !== e && !jt(e); ) e = e[4];
        return e;
      }
      function Xi(e, t, n, r, o) {
        if (null != r) {
          let i,
            a = !1;
          jt(r) ? (i = r) : tn(r) && ((a = !0), (r = r[0]));
          const d = ot(r);
          0 === e && null !== n
            ? null == o
              ? Zd(t, n, d)
              : Di(t, n, d, o || null, !0)
            : 1 === e && null !== n
            ? Di(t, n, d, o || null, !0)
            : 2 === e
            ? (function Xd(e, t, n) {
                const r = Aa(e, t);
                r &&
                  (function iv(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, d, a)
            : 3 === e && t.destroyNode(d),
            null != i &&
              (function lv(e, t, n, r, o) {
                const i = n[7];
                i !== ot(n) && Xi(t, e, r, i, o);
                for (let d = 10; d < n.length; d++) {
                  const p = n[d];
                  $s(p[1], p, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function iu(e, t, n) {
        return e.createElement(t, n);
      }
      function jd(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), Oo(o, -1)), n.splice(r, 1);
      }
      function su(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && jd(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = zi(e, 10 + t);
          !(function K_(e, t) {
            $s(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const a = i[19];
          null !== a && a.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -65);
        }
        return r;
      }
      function $d(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && $s(e, t, n, 3, null, null),
            (function ev(e) {
              let t = e[13];
              if (!t) return au(e[1], e);
              for (; t; ) {
                let n = null;
                if (tn(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    tn(t) && au(t[1], t), (t = t[3]);
                  null === t && (t = e), tn(t) && au(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function au(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function ov(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof ui)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let a = 0; a < i.length; a += 2) {
                        const d = o[i[a]],
                          p = i[a + 1];
                        try {
                          p.call(d);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function rv(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const a = n[i + 1],
                      d = "function" == typeof a ? a(t) : ot(t[a]),
                      p = r[(o = n[i + 2])],
                      D = n[i + 3];
                    "boolean" == typeof D
                      ? d.removeEventListener(n[i], p, D)
                      : D >= 0
                      ? r[(o = D)]()
                      : r[(o = -D)].unsubscribe(),
                      (i += 2);
                  } else {
                    const a = r[(o = n[i + 1])];
                    n[i].call(a);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) (0, r[i])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && jt(t[3])) {
            n !== t[3] && jd(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
          !(function F_(e) {
            Kl.delete(e[20]);
          })(t);
        }
      }
      function Gd(e, t, n) {
        return (function zd(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const o = e.data[r.directiveStart].encapsulation;
            if (o === Zt.None || o === Zt.Emulated) return null;
          }
          return rn(r, n);
        })(e, t.parent, n);
      }
      function Di(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function Zd(e, t, n) {
        e.appendChild(t, n);
      }
      function Wd(e, t, n, r, o) {
        null !== r ? Di(e, t, n, r, o) : Zd(e, t, n);
      }
      function Aa(e, t) {
        return e.parentNode(t);
      }
      let Jd = function qd(e, t, n) {
        return 40 & e.type ? rn(e, n) : null;
      };
      function Ta(e, t, n, r) {
        const o = Gd(e, r, t),
          i = t[11],
          d = (function Yd(e, t, n) {
            return Jd(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let p = 0; p < n.length; p++) Wd(i, o, n[p], d, !1);
          else Wd(i, o, n, d, !1);
      }
      function Ia(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return rn(t, e);
          if (4 & n) return uu(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Ia(e, r);
            {
              const o = e[t.index];
              return jt(o) ? uu(-1, o) : ot(o);
            }
          }
          if (32 & n) return tu(t, e)() || ot(e[t.index]);
          {
            const r = Qd(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Ia(js(e[16]), r)
              : Ia(e, t.next);
          }
        }
        return null;
      }
      function Qd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function uu(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return Ia(r, o);
        }
        return t[7];
      }
      function cu(e, t, n, r, o, i, a) {
        for (; null != n; ) {
          const d = r[n.index],
            p = n.type;
          if (
            (a && 0 === t && (d && Nn(ot(d), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & p) cu(e, t, n.child, r, o, i, !1), Xi(t, e, o, d, i);
            else if (32 & p) {
              const D = tu(n, r);
              let S;
              for (; (S = D()); ) Xi(t, e, o, S, i);
              Xi(t, e, o, d, i);
            } else 16 & p ? ef(e, t, r, n, o, i) : Xi(t, e, o, d, i);
          n = a ? n.projectionNext : n.next;
        }
      }
      function $s(e, t, n, r, o, i) {
        cu(n, r, e.firstChild, t, o, i, !1);
      }
      function ef(e, t, n, r, o, i) {
        const a = n[16],
          p = a[6].projection[r.projection];
        if (Array.isArray(p))
          for (let D = 0; D < p.length; D++) Xi(t, e, o, p[D], i);
        else cu(e, t, p, a[3], o, i, !0);
      }
      function tf(e, t, n) {
        e.setAttribute(t, "style", n);
      }
      function du(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function nf(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const rf = "ng-template";
      function cv(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && "class" === o) {
            if (((o = e[r]), -1 !== nf(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && "string" == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function sf(e) {
        return 4 === e.type && e.value !== rf;
      }
      function dv(e, t, n) {
        return t === (4 !== e.type || n ? e.value : rf);
      }
      function fv(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function gv(e) {
            for (let t = 0; t < e.length; t++) if (Es(e[t])) return t;
            return e.length;
          })(o);
        let a = !1;
        for (let d = 0; d < t.length; d++) {
          const p = t[d];
          if ("number" != typeof p) {
            if (!a)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== p && !dv(e, p, n)) || ("" === p && 1 === t.length))
                ) {
                  if (Nr(r)) return !1;
                  a = !0;
                }
              } else {
                const D = 8 & r ? p : t[++d];
                if (8 & r && null !== e.attrs) {
                  if (!cv(e.attrs, D, n)) {
                    if (Nr(r)) return !1;
                    a = !0;
                  }
                  continue;
                }
                const O = hv(8 & r ? "class" : p, o, sf(e), n);
                if (-1 === O) {
                  if (Nr(r)) return !1;
                  a = !0;
                  continue;
                }
                if ("" !== D) {
                  let V;
                  V = O > i ? "" : o[O + 1].toLowerCase();
                  const $ = 8 & r ? V : null;
                  if (($ && -1 !== nf($, D, 0)) || (2 & r && D !== V)) {
                    if (Nr(r)) return !1;
                    a = !0;
                  }
                }
              }
          } else {
            if (!a && !Nr(r) && !Nr(p)) return !1;
            if (a && Nr(p)) continue;
            (a = !1), (r = p | (1 & r));
          }
        }
        return Nr(r) || a;
      }
      function Nr(e) {
        return 0 == (1 & e);
      }
      function hv(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const a = t[o];
            if (a === e) return o;
            if (3 === a || 6 === a) i = !0;
            else {
              if (1 === a || 2 === a) {
                let d = t[++o];
                for (; "string" == typeof d; ) d = t[++o];
                continue;
              }
              if (4 === a) break;
              if (0 === a) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function mv(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function af(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (fv(e, t[r], n)) return !0;
        return !1;
      }
      function lf(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function vv(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              const d = e[++n];
              o += "[" + a + (d.length > 0 ? '="' + d + '"' : "") + "]";
            } else 8 & r ? (o += "." + a) : 4 & r && (o += " " + a);
          else
            "" !== o && !Nr(a) && ((t += lf(i, o)), (o = "")),
              (r = a),
              (i = i || !Nr(r));
          n++;
        }
        return "" !== o && (t += lf(i, o)), t;
      }
      const it = {};
      function uf(e) {
        cf(st(), ve(), ct() + e, !1);
      }
      function cf(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && Li(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Vi(t, i, 0, n);
          }
        mt(n);
      }
      function pf(e, t = null, n = null, r) {
        const o = gf(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function gf(e, t = null, n = null, r, o = new Set()) {
        const i = [n || nt, e_(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : Re(e))),
          new Dd(i, t || Sa(), r || null, o)
        );
      }
      let wi = (() => {
        class e {
          static create(n, r) {
            if (Array.isArray(n)) return pf({ name: "" }, r, n, "");
            {
              const o = n.name ?? "";
              return pf({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Mn),
          (e.NULL = new md()),
          (e.ɵprov = Mt({
            token: e,
            providedIn: "any",
            factory: () => un(pd),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function ts(e, t = N.Default) {
        const n = ve();
        return null === n ? un(e, t) : ca(C(), n, ce(e), t);
      }
      function wf() {
        throw new Error("invalid");
      }
      function Oa(e, t) {
        return (e << 17) | (t << 2);
      }
      function Rr(e) {
        return (e >> 17) & 32767;
      }
      function mu(e) {
        return 2 | e;
      }
      function Co(e) {
        return (131068 & e) >> 2;
      }
      function _u(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function vu(e) {
        return 1 | e;
      }
      function Ff(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const a = e.data[i];
              b(o), a.contentQueries(2, t[i], i);
            }
          }
      }
      function Na(e, t, n, r, o, i, a, d, p, D, S) {
        const O = t.blueprint.slice();
        return (
          (O[0] = o),
          (O[2] = 76 | r),
          (null !== S || (e && 1024 & e[2])) && (O[2] |= 1024),
          lr(O),
          (O[3] = O[15] = e),
          (O[8] = n),
          (O[10] = a || (e && e[10])),
          (O[11] = d || (e && e[11])),
          (O[12] = p || (e && e[12]) || null),
          (O[9] = D || (e && e[9]) || null),
          (O[6] = i),
          (O[20] = (function O_() {
            return x_++;
          })()),
          (O[21] = S),
          (O[16] = 2 == t.type ? e[16] : O),
          O
        );
      }
      function ns(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function Su(e, t, n, r, o) {
            const i = y(),
              a = re(),
              p = (e.data[t] = (function ey(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, a ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = p),
              null !== i &&
                (a
                  ? null == i.child && null !== p.parent && (i.child = p)
                  : null === i.next && (i.next = p)),
              p
            );
          })(e, t, n, r, o)),
            (function Cs() {
              return Ke.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const a = (function m() {
            const e = Ke.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === a ? -1 : a.injectorIndex;
        }
        return T(i, !0), i;
      }
      function rs(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function Au(e, t, n) {
        L(t);
        try {
          const r = e.viewQuery;
          null !== r && Ru(1, r, n);
          const o = e.template;
          null !== o && Nf(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Ff(e, t),
            e.staticViewQueries && Ru(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function Kv(e, t) {
              for (let n = 0; n < t.length; n++) my(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), _t();
        }
      }
      function Ra(e, t, n, r) {
        const o = t[2];
        if (128 != (128 & o)) {
          L(t);
          try {
            lr(t),
              (function Pr(e) {
                return (Ke.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Nf(e, t, n, 2, r);
            const a = 3 == (3 & o);
            if (a) {
              const D = e.preOrderCheckHooks;
              null !== D && Li(t, D, null);
            } else {
              const D = e.preOrderHooks;
              null !== D && Vi(t, D, 0, null), ws(t, 0);
            }
            if (
              ((function py(e) {
                for (let t = nu(e); null !== t; t = ru(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                      i = o[3];
                    0 == (512 & o[2]) && Oo(i, 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function hy(e) {
                for (let t = nu(e); null !== t; t = ru(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    po(r) && Ra(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && Ff(e, t),
              a)
            ) {
              const D = e.contentCheckHooks;
              null !== D && Li(t, D);
            } else {
              const D = e.contentHooks;
              null !== D && Vi(t, D, 1), ws(t, 1);
            }
            !(function qv(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) mt(~o);
                    else {
                      const i = o,
                        a = n[++r],
                        d = n[++r];
                      oa(a, i), d(2, t[i]);
                    }
                  }
                } finally {
                  mt(-1);
                }
            })(e, t);
            const d = e.components;
            null !== d &&
              (function Jv(e, t) {
                for (let n = 0; n < t.length; n++) gy(e, t[n]);
              })(t, d);
            const p = e.viewQuery;
            if ((null !== p && Ru(2, p, r), a)) {
              const D = e.viewCheckHooks;
              null !== D && Li(t, D);
            } else {
              const D = e.viewHooks;
              null !== D && Vi(t, D, 2), ws(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), Oo(t[3], -1));
          } finally {
            _t();
          }
        }
      }
      function Nf(e, t, n, r, o) {
        const i = ct(),
          a = 2 & r;
        try {
          mt(-1), a && t.length > 22 && cf(e, t, 22, !1), n(r, o);
        } finally {
          mt(i);
        }
      }
      function Rf(e, t, n) {
        if (io(t)) {
          const o = t.directiveEnd;
          for (let i = t.directiveStart; i < o; i++) {
            const a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        }
      }
      function Tu(e, t, n) {
        !Fo() ||
          ((function iy(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || fi(n, t), Nn(r, t);
            const a = n.initialInputs;
            for (let d = o; d < i; d++) {
              const p = e.data[d],
                D = pn(p);
              D && cy(t, n, p);
              const S = pi(t, e, d, n);
              Nn(S, t),
                null !== a && dy(0, d - o, S, p, 0, a),
                D && (wn(n.index, t)[8] = S);
            }
          })(e, t, n, rn(n, t)),
          128 == (128 & n.flags) &&
            (function sy(e, t, n) {
              const r = n.directiveStart,
                o = n.directiveEnd,
                i = n.index,
                a = (function ia() {
                  return Ke.lFrame.currentDirectiveIndex;
                })();
              try {
                mt(i);
                for (let d = r; d < o; d++) {
                  const p = e.data[d],
                    D = t[d];
                  Ri(d),
                    (null !== p.hostBindings ||
                      0 !== p.hostVars ||
                      null !== p.hostAttrs) &&
                      jf(p, D);
                }
              } finally {
                mt(-1), Ri(a);
              }
            })(e, t, n));
      }
      function Iu(e, t, n = rn) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i + 1],
              d = -1 === a ? n(t, e) : e[a];
            e[o++] = d;
          }
        }
      }
      function kf(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = xu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function xu(e, t, n, r, o, i, a, d, p, D) {
        const S = 22 + r,
          O = S + o,
          V = (function Qv(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : it);
            return n;
          })(S, O),
          $ = "function" == typeof D ? D() : D;
        return (V[1] = {
          type: e,
          blueprint: V,
          template: n,
          queries: null,
          viewQuery: d,
          declTNode: t,
          data: V.slice().fill(null, S),
          bindingStartIndex: S,
          expandoStartIndex: O,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: p,
          consts: $,
          incompleteFirstPass: !1,
        });
      }
      function Lf(e, t, n, r) {
        const o = Wf(t);
        null === n
          ? o.push(r)
          : (o.push(n), e.firstCreatePass && Yf(e).push(r, o.length - 1));
      }
      function Vf(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, o)
              : (n[r] = [t, o]);
          }
        return n;
      }
      function Bf(e, t) {
        const r = t.directiveEnd,
          o = e.data,
          i = t.attrs,
          a = [];
        let d = null,
          p = null;
        for (let D = t.directiveStart; D < r; D++) {
          const S = o[D],
            O = S.inputs,
            V = null === i || sf(t) ? null : fy(O, i);
          a.push(V), (d = Vf(O, D, d)), (p = Vf(S.outputs, D, p));
        }
        null !== d &&
          (d.hasOwnProperty("class") && (t.flags |= 16),
          d.hasOwnProperty("style") && (t.flags |= 32)),
          (t.initialInputs = a),
          (t.inputs = d),
          (t.outputs = p);
      }
      function Uf(e, t) {
        const n = wn(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function Ou(e, t, n, r) {
        let o = !1;
        if (Fo()) {
          const i = (function ay(e, t, n) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const a = r[i];
                  af(n, a.selectors, !1) &&
                    (o || (o = []),
                    Uo(fi(n, t), e, a.type),
                    pn(a) ? ($f(e, n), o.unshift(a)) : o.push(a));
                }
              return o;
            })(e, t, n),
            a = null === r ? null : { "": -1 };
          if (null !== i) {
            (o = !0), Gf(n, e.data.length, i.length);
            for (let S = 0; S < i.length; S++) {
              const O = i[S];
              O.providersResolver && O.providersResolver(O);
            }
            let d = !1,
              p = !1,
              D = rs(e, t, i.length, null);
            for (let S = 0; S < i.length; S++) {
              const O = i[S];
              (n.mergedAttrs = Bi(n.mergedAttrs, O.hostAttrs)),
                zf(e, n, t, D, O),
                uy(D, O, a),
                null !== O.contentQueries && (n.flags |= 8),
                (null !== O.hostBindings ||
                  null !== O.hostAttrs ||
                  0 !== O.hostVars) &&
                  (n.flags |= 128);
              const V = O.type.prototype;
              !d &&
                (V.ngOnChanges || V.ngOnInit || V.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (d = !0)),
                !p &&
                  (V.ngOnChanges || V.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (p = !0)),
                D++;
            }
            Bf(e, n);
          }
          a &&
            (function ly(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const i = n[t[o + 1]];
                  if (null == i) throw new K(-301, !1);
                  r.push(t[o], i);
                }
              }
            })(n, r, a);
        }
        return (n.mergedAttrs = Bi(n.mergedAttrs, n.attrs)), o;
      }
      function Hf(e, t, n, r, o, i) {
        const a = i.hostBindings;
        if (a) {
          let d = e.hostBindingOpCodes;
          null === d && (d = e.hostBindingOpCodes = []);
          const p = ~t.index;
          (function oy(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(d) != p && d.push(p),
            d.push(r, o, a);
        }
      }
      function jf(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function $f(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function uy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          pn(t) && (n[""] = e);
        }
      }
      function Gf(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function zf(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Vn(o.type)),
          a = new ui(i, pn(o), ts);
        (e.blueprint[r] = a),
          (n[r] = a),
          Hf(e, t, 0, r, rs(e, n, o.hostVars, it), o);
      }
      function cy(e, t, n) {
        const r = rn(t, e),
          o = kf(n),
          i = e[10],
          a = ka(
            e,
            Na(
              e,
              o,
              null,
              n.onPush ? 32 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null,
              null
            )
          );
        e[t.index] = a;
      }
      function Qr(e, t, n, r, o, i) {
        const a = rn(e, t);
        !(function Pu(e, t, n, r, o, i, a) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const d = null == a ? ne(i) : a(i, r || "", o);
            e.setAttribute(t, o, d, n);
          }
        })(t[11], a, i, e.value, n, r, o);
      }
      function dy(e, t, n, r, o, i) {
        const a = i[t];
        if (null !== a) {
          const d = r.setInput;
          for (let p = 0; p < a.length; ) {
            const D = a[p++],
              S = a[p++],
              O = a[p++];
            null !== d ? r.setInput(n, O, D, S) : (n[S] = O);
          }
        }
      }
      function fy(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              e.hasOwnProperty(o) &&
                (null === n && (n = []), n.push(o, e[o], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Zf(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function gy(e, t) {
        const n = wn(t, e);
        if (po(n)) {
          const r = n[1];
          48 & n[2] ? Ra(r, n, r.template, n[8]) : n[5] > 0 && Fu(n);
        }
      }
      function Fu(e) {
        for (let r = nu(e); null !== r; r = ru(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (po(i))
              if (512 & i[2]) {
                const a = i[1];
                Ra(a, i, a.template, i[8]);
              } else i[5] > 0 && Fu(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = wn(n[r], e);
            po(o) && o[5] > 0 && Fu(o);
          }
      }
      function my(e, t) {
        const n = wn(t, e),
          r = n[1];
        (function _y(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          Au(r, n, n[8]);
      }
      function ka(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Nu(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = js(e);
          if (Eo(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function La(e, t, n, r = !0) {
        const o = t[10];
        o.begin && o.begin();
        try {
          Ra(e, t, e.template, n);
        } catch (a) {
          throw (r && Jf(t, a), a);
        } finally {
          o.end && o.end();
        }
      }
      function Ru(e, t, n) {
        b(0), t(e, n);
      }
      function Wf(e) {
        return e[7] || (e[7] = []);
      }
      function Yf(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Jf(e, t) {
        const n = e[9],
          r = n ? n.get(Us, null) : null;
        r && r.handleError(t);
      }
      function ku(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const a = n[i++],
            d = n[i++],
            p = t[a],
            D = e.data[a];
          null !== D.setInput ? D.setInput(p, o, r, d) : (p[d] = o);
        }
      }
      function Va(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let a = 0; a < t.length; a++) {
            const d = t[a];
            "number" == typeof d
              ? (i = d)
              : 1 == i
              ? (o = Ue(o, d))
              : 2 == i && (r = Ue(r, d + ": " + t[++a] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Ba(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(ot(i)), jt(i)))
            for (let d = 10; d < i.length; d++) {
              const p = i[d],
                D = p[1].firstChild;
              null !== D && Ba(p[1], p, D, r);
            }
          const a = n.type;
          if (8 & a) Ba(e, t, n.child, r);
          else if (32 & a) {
            const d = tu(n, t);
            let p;
            for (; (p = d()); ) r.push(p);
          } else if (16 & a) {
            const d = Qd(t, n);
            if (Array.isArray(d)) r.push(...d);
            else {
              const p = js(t[16]);
              Ba(p[1], p, d, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class Gs {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Ba(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (jt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (su(t, r), zi(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          $d(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Lf(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Nu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          La(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new K(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function X_(e, t) {
              $s(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new K(902, !1);
          this._appRef = t;
        }
      }
      class vy extends Gs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          La(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Lu extends Vs {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = F(t);
          return new zs(n, this.ngModule);
        }
      }
      function Kf(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Cy {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          const o = this.injector.get(t, zl, r);
          return o !== zl || n === zl ? o : this.parentInjector.get(t, n, r);
        }
      }
      class zs extends bd {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function yv(e) {
              return e.map(vv).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Kf(this.componentDef.inputs);
        }
        get outputs() {
          return Kf(this.componentDef.outputs);
        }
        create(t, n, r, o) {
          let i = (o = o || this.ngModule) instanceof Ci ? o : o?.injector;
          i &&
            null !== this.componentDef.getStandaloneInjector &&
            (i = this.componentDef.getStandaloneInjector(i) || i);
          const a = i ? new Cy(t, i) : t,
            d = a.get(Md, null);
          if (null === d) throw new K(407, !1);
          const p = a.get(__, null),
            D = d.createRenderer(null, this.componentDef),
            S = this.componentDef.selectors[0][0] || "div",
            O = r
              ? (function Xv(e, t, n) {
                  return e.selectRootElement(t, n === Zt.ShadowDom);
                })(D, r, this.componentDef.encapsulation)
              : iu(
                  d.createRenderer(null, this.componentDef),
                  S,
                  (function yy(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(S)
                ),
            V = this.componentDef.onPush ? 288 : 272,
            $ = xu(0, null, null, 1, 0, null, null, null, null, null),
            de = Na(null, $, null, V, null, null, d, D, p, a, null);
          let be, xe;
          L(de);
          try {
            const ke = (function by(e, t, n, r, o, i) {
              const a = n[1];
              n[22] = e;
              const p = ns(a, 22, 2, "#host", null),
                D = (p.mergedAttrs = t.hostAttrs);
              null !== D &&
                (Va(p, D, !0),
                null !== e &&
                  (di(o, e, D),
                  null !== p.classes && du(o, e, p.classes),
                  null !== p.styles && tf(o, e, p.styles)));
              const S = r.createRenderer(e, t),
                O = Na(
                  n,
                  kf(t),
                  null,
                  t.onPush ? 32 : 16,
                  n[22],
                  p,
                  r,
                  S,
                  i || null,
                  null,
                  null
                );
              return (
                a.firstCreatePass &&
                  (Uo(fi(p, n), a, t.type), $f(a, p), Gf(p, n.length, 1)),
                ka(n, O),
                (n[22] = O)
              );
            })(O, this.componentDef, de, d, D);
            if (O)
              if (r) di(D, O, ["ng-version", v_.full]);
              else {
                const { attrs: Ge, classes: ye } = (function Cv(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === o
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === o && n.push(i);
                    else {
                      if (!Nr(o)) break;
                      o = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                Ge && di(D, O, Ge),
                  ye && ye.length > 0 && du(D, O, ye.join(" "));
              }
            if (((xe = zr($, 22)), void 0 !== n)) {
              const Ge = (xe.projection = []);
              for (let ye = 0; ye < this.ngContentSelectors.length; ye++) {
                const et = n[ye];
                Ge.push(null != et ? Array.from(et) : null);
              }
            }
            (be = (function Ey(e, t, n, r) {
              const o = n[1],
                i = (function ry(e, t, n) {
                  const r = C();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    zf(e, r, t, rs(e, t, 1, null), n),
                    Bf(e, r));
                  const o = pi(t, e, r.directiveStart, r);
                  Nn(o, t);
                  const i = rn(r, t);
                  return i && Nn(i, t), o;
                })(o, n, t);
              if (((e[8] = n[8] = i), null !== r)) for (const d of r) d(i, t);
              if (t.contentQueries) {
                const d = C();
                t.contentQueries(1, i, d.directiveStart);
              }
              const a = C();
              return (
                !o.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (mt(a.index),
                  Hf(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  jf(t, i)),
                i
              );
            })(ke, this.componentDef, de, [My])),
              Au($, de, null);
          } finally {
            _t();
          }
          return new wy(this.componentType, be, Ki(xe, de), de, xe);
        }
      }
      class wy extends class c_ {} {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new vy(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            const i = this._rootLView;
            ku(i[1], i, o, t, n), Uf(i, this._tNode.index);
          }
        }
        get injector() {
          return new _o(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function My() {
        const e = C();
        mo(ve()[1], e);
      }
      function Vu(e) {
        let t = (function Qf(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (pn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new K(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const a = e;
              (a.inputs = Bu(e.inputs)),
                (a.declaredInputs = Bu(e.declaredInputs)),
                (a.outputs = Bu(e.outputs));
              const d = o.hostBindings;
              d && Iy(e, d);
              const p = o.viewQuery,
                D = o.contentQueries;
              if (
                (p && Ay(e, p),
                D && Ty(e, D),
                Oe(e.inputs, o.inputs),
                Oe(e.declaredInputs, o.declaredInputs),
                Oe(e.outputs, o.outputs),
                pn(o) && o.data.animation)
              ) {
                const S = e.data;
                S.animation = (S.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let a = 0; a < i.length; a++) {
                const d = i[a];
                d && d.ngInherit && d(e), d === Vu && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function Sy(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Bi(o.hostAttrs, (n = Bi(n, o.hostAttrs))));
          }
        })(r);
      }
      function Bu(e) {
        return e === Kt ? {} : e === nt ? [] : e;
      }
      function Ay(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function Ty(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function Iy(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let Ua = null;
      function bi() {
        if (!Ua) {
          const e = Le.Symbol;
          if (e && e.iterator) Ua = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ua = r);
            }
          }
        }
        return Ua;
      }
      function Zs(e) {
        return (
          !!Uu(e) && (Array.isArray(e) || (!(e instanceof Map) && bi() in e))
        );
      }
      function Uu(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Xr(e, t, n) {
        return (e[t] = n);
      }
      function Rn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ei(e, t, n, r) {
        const o = Rn(e, t, n);
        return Rn(e, t + 1, r) || o;
      }
      function Hu(e, t, n, r) {
        const o = ve();
        return Rn(o, nr(), t) && (st(), Qr(at(), o, e, t, n, r)), Hu;
      }
      function lh(e, t, n, r, o, i, a, d) {
        const p = ve(),
          D = st(),
          S = e + 22,
          O = D.firstCreatePass
            ? (function Ly(e, t, n, r, o, i, a, d, p) {
                const D = t.consts,
                  S = ns(t, e, 4, a || null, tr(D, d));
                Ou(t, n, S, tr(D, p)), mo(t, S);
                const O = (S.tViews = xu(
                  2,
                  S,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  D
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, S),
                    (O.queries = t.queries.embeddedTView(S))),
                  S
                );
              })(S, D, p, t, n, r, o, i, a)
            : D.data[S];
        T(O, !1);
        const V = p[11].createComment("");
        Ta(D, p, V, O),
          Nn(V, p),
          ka(p, (p[S] = Zf(V, p, V, O))),
          Xn(O) && Tu(D, p, O),
          null != a && Iu(p, O, d);
      }
      function uh(e) {
        return Ir(
          (function Pn() {
            return Ke.lFrame.contextLView;
          })(),
          22 + e
        );
      }
      function ju(e, t, n) {
        const r = ve();
        return (
          Rn(r, nr(), t) &&
            (function cr(e, t, n, r, o, i, a, d) {
              const p = rn(t, n);
              let S,
                D = t.inputs;
              !d && null != D && (S = D[r])
                ? (ku(e, n, S, r, o), Vt(t) && Uf(n, t.index))
                : 3 & t.type &&
                  ((r = (function ty(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (o = null != a ? a(o, t.value || "", r) : o),
                  i.setProperty(p, r, o));
            })(st(), at(), r, e, t, r[11], n, !1),
          ju
        );
      }
      function $u(e, t, n, r, o) {
        const a = o ? "class" : "style";
        ku(e, n, t.inputs[a], a, r);
      }
      function ja(e, t, n, r) {
        const o = ve(),
          i = st(),
          a = 22 + e,
          d = o[11],
          p = (o[a] = iu(
            d,
            t,
            (function go() {
              return Ke.lFrame.currentNamespace;
            })()
          )),
          D = i.firstCreatePass
            ? (function By(e, t, n, r, o, i, a) {
                const d = t.consts,
                  D = ns(t, e, 2, o, tr(d, i));
                return (
                  Ou(t, n, D, tr(d, a)),
                  null !== D.attrs && Va(D, D.attrs, !1),
                  null !== D.mergedAttrs && Va(D, D.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, D),
                  D
                );
              })(a, i, o, 0, t, n, r)
            : i.data[a];
        T(D, !0);
        const S = D.mergedAttrs;
        null !== S && di(d, p, S);
        const O = D.classes;
        null !== O && du(d, p, O);
        const V = D.styles;
        return (
          null !== V && tf(d, p, V),
          64 != (64 & D.flags) && Ta(i, o, p, D),
          0 ===
            (function Wr() {
              return Ke.lFrame.elementDepthCount;
            })() && Nn(p, o),
          (function ii() {
            Ke.lFrame.elementDepthCount++;
          })(),
          Xn(D) && (Tu(i, o, D), Rf(i, D, o)),
          null !== r && Iu(o, D),
          ja
        );
      }
      function $a() {
        let e = C();
        re() ? Ve() : ((e = e.parent), T(e, !1));
        const t = e;
        !(function Fi() {
          Ke.lFrame.elementDepthCount--;
        })();
        const n = st();
        return (
          n.firstCreatePass && (mo(n, e), io(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function sa(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            $u(n, t, ve(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function dl(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            $u(n, t, ve(), t.stylesWithoutHost, !1),
          $a
        );
      }
      function Gu(e, t, n, r) {
        return ja(e, t, n, r), $a(), Gu;
      }
      function Ga(e, t, n) {
        const r = ve(),
          o = st(),
          i = e + 22,
          a = o.firstCreatePass
            ? (function Uy(e, t, n, r, o) {
                const i = t.consts,
                  a = tr(i, r),
                  d = ns(t, e, 8, "ng-container", a);
                return (
                  null !== a && Va(d, a, !0),
                  Ou(t, n, d, tr(i, o)),
                  null !== t.queries && t.queries.elementStart(t, d),
                  d
                );
              })(i, o, r, t, n)
            : o.data[i];
        T(a, !0);
        const d = (r[i] = r[11].createComment(""));
        return (
          Ta(o, r, d, a),
          Nn(d, r),
          Xn(a) && (Tu(o, r, a), Rf(o, a, r)),
          null != n && Iu(r, a),
          Ga
        );
      }
      function za() {
        let e = C();
        const t = st();
        return (
          re() ? Ve() : ((e = e.parent), T(e, !1)),
          t.firstCreatePass && (mo(t, e), io(e) && t.queries.elementEnd(e)),
          za
        );
      }
      function dh() {
        return ve();
      }
      function zu(e) {
        return !!e && "function" == typeof e.then;
      }
      function fh(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const hh = fh;
      function Zu(e, t, n, r) {
        const o = ve(),
          i = st(),
          a = C();
        return (
          (function gh(e, t, n, r, o, i, a, d) {
            const p = Xn(r),
              S = e.firstCreatePass && Yf(e),
              O = t[8],
              V = Wf(t);
            let $ = !0;
            if (3 & r.type || d) {
              const xe = rn(r, t),
                ke = d ? d(xe) : xe,
                Ge = V.length,
                ye = d ? (xt) => d(ot(xt[r.index])) : r.index;
              let et = null;
              if (
                (!d &&
                  p &&
                  (et = (function Hy(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const a = o[i];
                        if (a === n && o[i + 1] === r) {
                          const d = t[7],
                            p = o[i + 2];
                          return d.length > p ? d[p] : null;
                        }
                        "string" == typeof a && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== et)
              )
                ((et.__ngLastListenerFn__ || et).__ngNextListenerFn__ = i),
                  (et.__ngLastListenerFn__ = i),
                  ($ = !1);
              else {
                i = _h(r, t, O, i, !1);
                const xt = n.listen(ke, o, i);
                V.push(i, xt), S && S.push(o, ye, Ge, Ge + 1);
              }
            } else i = _h(r, t, O, i, !1);
            const de = r.outputs;
            let be;
            if ($ && null !== de && (be = de[o])) {
              const xe = be.length;
              if (xe)
                for (let ke = 0; ke < xe; ke += 2) {
                  const Gt = t[be[ke]][be[ke + 1]].subscribe(i),
                    Ai = V.length;
                  V.push(i, Gt), S && S.push(o, r.index, Ai, -(Ai + 1));
                }
            }
          })(i, o, o[11], a, e, t, 0, r),
          Zu
        );
      }
      function mh(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return Jf(e, o), !1;
        }
      }
      function _h(e, t, n, r, o) {
        return function i(a) {
          if (a === Function) return r;
          Nu(2 & e.flags ? wn(e.index, t) : t);
          let p = mh(t, 0, r, a),
            D = i.__ngNextListenerFn__;
          for (; D; ) (p = mh(t, 0, D, a) && p), (D = D.__ngNextListenerFn__);
          return o && !1 === p && (a.preventDefault(), (a.returnValue = !1)), p;
        };
      }
      function vh(e = 1) {
        return (function Et(e) {
          return (Ke.lFrame.contextLView = (function ft(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Ke.lFrame.contextLView))[8];
        })(e);
      }
      function Th(e, t, n, r, o) {
        const i = e[n + 1],
          a = null === t;
        let d = r ? Rr(i) : Co(i),
          p = !1;
        for (; 0 !== d && (!1 === p || a); ) {
          const S = e[d + 1];
          Wy(e[d], t) && ((p = !0), (e[d + 1] = r ? vu(S) : mu(S))),
            (d = r ? Rr(S) : Co(S));
        }
        p && (e[n + 1] = r ? mu(i) : vu(i));
      }
      function Wy(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && v(e, t) >= 0)
        );
      }
      function Yu(e, t) {
        return (
          (function kr(e, t, n, r) {
            const o = ve(),
              i = st(),
              a = (function ur(e) {
                const t = Ke.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            i.firstUpdatePass &&
              (function Lh(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[ct()],
                    a = (function kh(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Hh(e, t) {
                    return 0 != (e.flags & (t ? 16 : 32));
                  })(i, r) &&
                    null === t &&
                    !a &&
                    (t = !1),
                    (t = (function nC(e, t, n, r) {
                      const o = (function ki(e) {
                        const t = Ke.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Ys((n = qu(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const a = t.directiveStylingLast;
                        if (-1 === a || e[a] !== o)
                          if (((n = qu(o, e, t, n, r)), null === i)) {
                            let p = (function rC(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== Co(r)) return e[Rr(r)];
                            })(e, t, r);
                            void 0 !== p &&
                              Array.isArray(p) &&
                              ((p = qu(null, e, t, p[1], r)),
                              (p = Ys(p, t.attrs, r)),
                              (function oC(e, t, n, r) {
                                e[Rr(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, p));
                          } else
                            i = (function iC(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = Ys(r, e[i].hostAttrs, n);
                              return Ys(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function zy(e, t, n, r, o, i) {
                      let a = i ? t.classBindings : t.styleBindings,
                        d = Rr(a),
                        p = Co(a);
                      e[r] = n;
                      let S,
                        D = !1;
                      if (Array.isArray(n)) {
                        const O = n;
                        (S = O[1]), (null === S || v(O, S) > 0) && (D = !0);
                      } else S = n;
                      if (o)
                        if (0 !== p) {
                          const V = Rr(e[d + 1]);
                          (e[r + 1] = Oa(V, d)),
                            0 !== V && (e[V + 1] = _u(e[V + 1], r)),
                            (e[d + 1] = (function Bv(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[d + 1], r));
                        } else
                          (e[r + 1] = Oa(d, 0)),
                            0 !== d && (e[d + 1] = _u(e[d + 1], r)),
                            (d = r);
                      else
                        (e[r + 1] = Oa(p, 0)),
                          0 === d ? (d = r) : (e[p + 1] = _u(e[p + 1], r)),
                          (p = r);
                      D && (e[r + 1] = mu(e[r + 1])),
                        Th(e, S, r, !0),
                        Th(e, S, r, !1),
                        (function Zy(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            "string" == typeof t &&
                            v(i, t) >= 0 &&
                            (n[r + 1] = vu(n[r + 1]));
                        })(t, S, e, r, i),
                        (a = Oa(d, p)),
                        i ? (t.classBindings = a) : (t.styleBindings = a);
                    })(o, i, t, n, a, r);
                }
              })(i, e, a, r),
              t !== it &&
                Rn(o, a, t) &&
                (function Bh(e, t, n, r, o, i, a, d) {
                  if (!(3 & t.type)) return;
                  const p = e.data,
                    D = p[d + 1];
                  Za(
                    (function Mf(e) {
                      return 1 == (1 & e);
                    })(D)
                      ? Uh(p, t, n, o, Co(D), a)
                      : void 0
                  ) ||
                    (Za(i) ||
                      ((function Ef(e) {
                        return 2 == (2 & e);
                      })(D) &&
                        (i = Uh(p, null, n, o, d, a))),
                    (function uv(e, t, n, r, o) {
                      if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let i = -1 === r.indexOf("-") ? void 0 : Kr.DashCase;
                        null == o
                          ? e.removeStyle(n, r, i)
                          : ("string" == typeof o &&
                              o.endsWith("!important") &&
                              ((o = o.slice(0, -10)), (i |= Kr.Important)),
                            e.setStyle(n, r, o, i));
                      }
                    })(r, a, ho(ct(), n), o, i));
                })(
                  i,
                  i.data[ct()],
                  o,
                  o[11],
                  e,
                  (o[a + 1] = (function lC(e, t) {
                    return (
                      null == e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = Re(Wo(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  a
                );
          })(e, t, null, !0),
          Yu
        );
      }
      function qu(e, t, n, r, o) {
        let i = null;
        const a = n.directiveEnd;
        let d = n.directiveStylingLast;
        for (
          -1 === d ? (d = n.directiveStart) : d++;
          d < a && ((i = t[d]), (r = Ys(r, i.hostAttrs, o)), i !== e);

        )
          d++;
        return null !== e && (n.directiveStylingLast = d), r;
      }
      function Ys(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const a = t[i];
            "number" == typeof a
              ? (o = a)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                s(e, a, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Uh(e, t, n, r, o, i) {
        const a = null === t;
        let d;
        for (; o > 0; ) {
          const p = e[o],
            D = Array.isArray(p),
            S = D ? p[1] : p,
            O = null === S;
          let V = n[o + 1];
          V === it && (V = O ? nt : void 0);
          let $ = O ? h(V, r) : S === r ? V : void 0;
          if ((D && !Za($) && ($ = h(p, r)), Za($) && ((d = $), a))) return d;
          const de = e[o + 1];
          o = a ? Rr(de) : Co(de);
        }
        if (null !== t) {
          let p = i ? t.residualClasses : t.residualStyles;
          null != p && (d = h(p, r));
        }
        return d;
      }
      function Za(e) {
        return void 0 !== e;
      }
      function jh(e, t = "") {
        const n = ve(),
          r = st(),
          o = e + 22,
          i = r.firstCreatePass ? ns(r, o, 1, t, null) : r.data[o],
          a = (n[o] = (function ou(e, t) {
            return e.createText(t);
          })(n[11], t));
        Ta(r, n, a, i), T(i, !1);
      }
      function Ju(e) {
        return Wa("", e, ""), Ju;
      }
      function Wa(e, t, n) {
        const r = ve(),
          o = (function is(e, t, n, r) {
            return Rn(e, nr(), n) ? t + ne(n) + r : it;
          })(r, e, t, n);
        return (
          o !== it &&
            (function Do(e, t, n) {
              const r = ho(t, e);
              !(function Hd(e, t, n) {
                e.setValue(t, n);
              })(e[11], r, n);
            })(r, ct(), o),
          Wa
        );
      }
      const Mi = void 0;
      var TC = [
        "en",
        [["a", "p"], ["AM", "PM"], Mi],
        [["AM", "PM"], Mi, Mi],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Mi,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Mi,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Mi, "{1} 'at' {0}", Mi],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function AC(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let ps = {};
      function Ku(e) {
        const t = (function IC(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = up(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = up(r)), n)) return n;
        if ("en" === r) return TC;
        throw new K(701, !1);
      }
      function lp(e) {
        return Ku(e)[Qe.PluralCase];
      }
      function up(e) {
        return (
          e in ps ||
            (ps[e] =
              Le.ng &&
              Le.ng.common &&
              Le.ng.common.locales &&
              Le.ng.common.locales[e]),
          ps[e]
        );
      }
      var Qe = (() => (
        ((Qe = Qe || {})[(Qe.LocaleId = 0)] = "LocaleId"),
        (Qe[(Qe.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (Qe[(Qe.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (Qe[(Qe.DaysFormat = 3)] = "DaysFormat"),
        (Qe[(Qe.DaysStandalone = 4)] = "DaysStandalone"),
        (Qe[(Qe.MonthsFormat = 5)] = "MonthsFormat"),
        (Qe[(Qe.MonthsStandalone = 6)] = "MonthsStandalone"),
        (Qe[(Qe.Eras = 7)] = "Eras"),
        (Qe[(Qe.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (Qe[(Qe.WeekendRange = 9)] = "WeekendRange"),
        (Qe[(Qe.DateFormat = 10)] = "DateFormat"),
        (Qe[(Qe.TimeFormat = 11)] = "TimeFormat"),
        (Qe[(Qe.DateTimeFormat = 12)] = "DateTimeFormat"),
        (Qe[(Qe.NumberSymbols = 13)] = "NumberSymbols"),
        (Qe[(Qe.NumberFormats = 14)] = "NumberFormats"),
        (Qe[(Qe.CurrencyCode = 15)] = "CurrencyCode"),
        (Qe[(Qe.CurrencySymbol = 16)] = "CurrencySymbol"),
        (Qe[(Qe.CurrencyName = 17)] = "CurrencyName"),
        (Qe[(Qe.Currencies = 18)] = "Currencies"),
        (Qe[(Qe.Directionality = 19)] = "Directionality"),
        (Qe[(Qe.PluralCase = 20)] = "PluralCase"),
        (Qe[(Qe.ExtraData = 21)] = "ExtraData"),
        Qe
      ))();
      const gs = "en-US";
      let cp = gs;
      function ec(e, t, n, r, o) {
        if (((e = ce(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) ec(e[i], t, n, r, o);
        else {
          const i = st(),
            a = ve();
          let d = yi(e) ? e : ce(e.provide),
            p = wd(e);
          const D = C(),
            S = 1048575 & D.providerIndexes,
            O = D.directiveStart,
            V = D.providerIndexes >> 20;
          if (yi(e) || !e.multi) {
            const $ = new ui(p, o, ts),
              de = nc(d, t, o ? S : S + V, O);
            -1 === de
              ? (Uo(fi(D, a), i, d),
                tc(i, e, t.length),
                t.push(d),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push($),
                a.push($))
              : ((n[de] = $), (a[de] = $));
          } else {
            const $ = nc(d, t, S + V, O),
              de = nc(d, t, S, S + V),
              be = $ >= 0 && n[$],
              xe = de >= 0 && n[de];
            if ((o && !xe) || (!o && !be)) {
              Uo(fi(D, a), i, d);
              const ke = (function SD(e, t, n, r, o) {
                const i = new ui(e, n, ts);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Rp(i, o, r && !n),
                  i
                );
              })(o ? MD : ED, n.length, o, r, p);
              !o && xe && (n[de].providerFactory = ke),
                tc(i, e, t.length, 0),
                t.push(d),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push(ke),
                a.push(ke);
            } else tc(i, e, $ > -1 ? $ : de, Rp(n[o ? de : $], p, !o && r));
            !o && r && xe && n[de].componentProviders++;
          }
        }
      }
      function tc(e, t, n, r) {
        const o = yi(t),
          i = (function n_(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const p = (i ? ce(t.useClass) : t).prototype.ngOnDestroy;
          if (p) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const S = D.indexOf(n);
              -1 === S ? D.push(n, [r, p]) : D[S + 1].push(r, p);
            } else D.push(n, p);
          }
        }
      }
      function Rp(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function nc(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function ED(e, t, n, r) {
        return rc(this.multi, []);
      }
      function MD(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const a = this.providerFactory.componentProviders,
            d = pi(n, n[1], this.providerFactory.index, r);
          (i = d.slice(0, a)), rc(o, i);
          for (let p = a; p < d.length; p++) i.push(d[p]);
        } else (i = []), rc(o, i);
        return i;
      }
      function rc(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function kp(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function bD(e, t, n) {
              const r = st();
              if (r.firstCreatePass) {
                const o = pn(e);
                ec(n, r.data, r.blueprint, o, !0),
                  ec(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class ms {}
      class Lp {}
      function AD(e, t) {
        return new Vp(e, t ?? null);
      }
      class Vp extends ms {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Lu(this));
          const r = We(t);
          (this._bootstrapComponents = yo(r.bootstrap)),
            (this._r3Injector = gf(
              t,
              n,
              [
                { provide: ms, useValue: this },
                { provide: Vs, useValue: this.componentFactoryResolver },
              ],
              Re(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class oc extends Lp {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Vp(this.moduleType, t);
        }
      }
      class TD extends ms {
        constructor(t, n, r) {
          super(),
            (this.componentFactoryResolver = new Lu(this)),
            (this.instance = null);
          const o = new Dd(
            [
              ...t,
              { provide: ms, useValue: this },
              { provide: Vs, useValue: this.componentFactoryResolver },
            ],
            n || Sa(),
            r,
            new Set(["environment"])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function ic(e, t, n = null) {
        return new TD(e, t, n).injector;
      }
      let ID = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const r = _d(0, n.type),
                o =
                  r.length > 0
                    ? ic([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = Mt({
            token: e,
            providedIn: "environment",
            factory: () => new e(un(Ci)),
          })),
          e
        );
      })();
      function Bp(e) {
        e.getStandaloneInjector = (t) =>
          t.get(ID).getOrCreateStandaloneInjector(e);
      }
      function Zp(e, t, n) {
        const r = Yt() + e,
          o = ve();
        return o[r] === it
          ? Xr(o, r, n ? t.call(n) : t())
          : (function Ws(e, t) {
              return e[t];
            })(o, r);
      }
      function Wp(e, t, n, r) {
        return (function Yp(e, t, n, r, o, i) {
          const a = t + n;
          return Rn(e, a, o)
            ? Xr(e, a + 1, i ? r.call(i, o) : r(o))
            : ea(e, a + 1);
        })(ve(), Yt(), e, t, n, r);
      }
      function ea(e, t) {
        const n = e[t];
        return n === it ? void 0 : n;
      }
      function Jp(e, t, n, r, o, i, a, d) {
        const p = t + n;
        return (function Ha(e, t, n, r, o) {
          const i = Ei(e, t, n, r);
          return Rn(e, t + 2, o) || i;
        })(e, p, o, i, a)
          ? Xr(e, p + 3, d ? r.call(d, o, i, a) : r(o, i, a))
          : ea(e, p + 3);
      }
      function Xp(e, t) {
        const n = st();
        let r;
        const o = e + 22;
        n.firstCreatePass
          ? ((r = (function ZD(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[o] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
          : (r = n.data[o]);
        const i = r.factory || (r.factory = Vn(r.type)),
          a = I(ts);
        try {
          const d = Lo(!1),
            p = i();
          return (
            Lo(d),
            (function Vy(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, ve(), o, p),
            p
          );
        } finally {
          I(a);
        }
      }
      function eg(e, t, n, r) {
        const o = e + 22,
          i = ve(),
          a = Ir(i, o);
        return ta(i, o)
          ? (function qp(e, t, n, r, o, i, a) {
              const d = t + n;
              return Ei(e, d, o, i)
                ? Xr(e, d + 2, a ? r.call(a, o, i) : r(o, i))
                : ea(e, d + 2);
            })(i, Yt(), t, a.transform, n, r, a)
          : a.transform(n, r);
      }
      function tg(e, t, n, r, o) {
        const i = e + 22,
          a = ve(),
          d = Ir(a, i);
        return ta(a, i)
          ? Jp(a, Yt(), t, d.transform, n, r, o, d)
          : d.transform(n, r, o);
      }
      function ta(e, t) {
        return e[1].data[t].pure;
      }
      function ac(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const no = class JD extends f.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            a = r;
          if (t && "object" == typeof t) {
            const p = t;
            (o = p.next?.bind(p)),
              (i = p.error?.bind(p)),
              (a = p.complete?.bind(p));
          }
          this.__isAsync && ((i = ac(i)), o && (o = ac(o)), a && (a = ac(a)));
          const d = super.subscribe({ next: o, error: i, complete: a });
          return t instanceof w.w0 && t.add(d), d;
        }
      };
      function KD() {
        return this._results[bi()]();
      }
      class lc {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = bi(),
            r = lc.prototype;
          r[n] || (r[n] = KD);
        }
        get changes() {
          return this._changes || (this._changes = new no());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const o = Un(t);
          (this._changesDetected = !(function Ml(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(r._results, o, n)) &&
            ((r._results = o),
            (r.length = o.length),
            (r.last = o[this.length - 1]),
            (r.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let na = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = e0), e;
      })();
      const QD = na,
        XD = class extends QD {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t, n) {
            const r = this._declarationTContainer.tViews,
              o = Na(
                this._declarationLView,
                r,
                t,
                16,
                null,
                r.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const a = this._declarationLView[19];
            return (
              null !== a && (o[19] = a.createEmbeddedView(r)),
              Au(r, o, t),
              new Gs(o)
            );
          }
        };
      function e0() {
        return Qa(C(), ve());
      }
      function Qa(e, t) {
        return 4 & e.type ? new XD(t, e, Ki(e, t)) : null;
      }
      let Xa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = t0), e;
      })();
      function t0() {
        return og(C(), ve());
      }
      const n0 = Xa,
        ng = class extends n0 {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Ki(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new _o(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Bo(this._hostTNode, this._hostLView);
            if (la(t)) {
              const n = ko(t, this._hostLView),
                r = Ro(t);
              return new _o(n[1].data[r + 8], n);
            }
            return new _o(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = rg(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            "number" == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const a = t.createEmbeddedView(n || {}, i);
            return this.insert(a, o), a;
          }
          createComponent(t, n, r, o, i) {
            const a =
              t &&
              !(function zo(e) {
                return "function" == typeof e;
              })(t);
            let d;
            if (a) d = n;
            else {
              const O = n || {};
              (d = O.index),
                (r = O.injector),
                (o = O.projectableNodes),
                (i = O.environmentInjector || O.ngModuleRef);
            }
            const p = a ? t : new zs(F(t)),
              D = r || this.parentInjector;
            if (!i && null == p.ngModule) {
              const V = (a ? D : this.parentInjector).get(Ci, null);
              V && (i = V);
            }
            const S = p.create(D, o, void 0, i);
            return this.insert(S.hostView, d), S;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function Zr(e) {
                return jt(e[3]);
              })(r)
            ) {
              const S = this.indexOf(t);
              if (-1 !== S) this.detach(S);
              else {
                const O = r[3],
                  V = new ng(O, O[6], O[3]);
                V.detach(V.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              a = this._lContainer;
            !(function tv(e, t, n, r) {
              const o = 10 + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[o]), _a(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const a = t[17];
              null !== a &&
                n !== a &&
                (function nv(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(a, t);
              const d = t[19];
              null !== d && d.insertView(e), (t[2] |= 64);
            })(o, r, a, i);
            const d = uu(i, a),
              p = r[11],
              D = Aa(p, a[7]);
            return (
              null !== D &&
                (function Q_(e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), $s(e, r, n, 1, o, i);
                })(o, a[6], p, r, D, d),
              t.attachToViewContainerRef(),
              _a(uc(a), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = rg(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = su(this._lContainer, n);
            r && (zi(uc(this._lContainer), n), $d(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = su(this._lContainer, n);
            return r && null != zi(uc(this._lContainer), n) ? new Gs(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function rg(e) {
        return e[8];
      }
      function uc(e) {
        return e[8] || (e[8] = []);
      }
      function og(e, t) {
        let n;
        const r = t[e.index];
        if (jt(r)) n = r;
        else {
          let o;
          if (8 & e.type) o = ot(r);
          else {
            const i = t[11];
            o = i.createComment("");
            const a = rn(e, t);
            Di(
              i,
              Aa(i, a),
              o,
              (function sv(e, t) {
                return e.nextSibling(t);
              })(i, a),
              !1
            );
          }
          (t[e.index] = n = Zf(r, t, o, e)), ka(t, n);
        }
        return new ng(n, e, t);
      }
      class cc {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new cc(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class dc {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const a = n.getByIndex(i);
              o.push(this.queries[a.indexInDeclarationView].clone());
            }
            return new dc(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== fg(t, n).matches && this.queries[n].setDirty();
        }
      }
      class ig {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class fc {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new fc(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class hc {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new hc(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, s0(n, i)),
                this.matchTNodeWithReadOption(t, n, ji(n, t, i, !1, !1));
            }
          else
            r === na
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, ji(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Bs || o === Xa || (o === na && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = ji(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function s0(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function l0(e, t, n, r) {
        return -1 === n
          ? (function a0(e, t) {
              return 11 & e.type ? Ki(e, t) : 4 & e.type ? Qa(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function u0(e, t, n) {
              return n === Bs
                ? Ki(t, e)
                : n === na
                ? Qa(t, e)
                : n === Xa
                ? og(t, e)
                : void 0;
            })(e, t, r)
          : pi(e, e[1], n, t);
      }
      function sg(e, t, n, r) {
        const o = t[19].queries[r];
        if (null === o.matches) {
          const i = e.data,
            a = n.matches,
            d = [];
          for (let p = 0; p < a.length; p += 2) {
            const D = a[p];
            d.push(D < 0 ? null : l0(t, i[D], a[p + 1], n.metadata.read));
          }
          o.matches = d;
        }
        return o.matches;
      }
      function pc(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const a = sg(e, t, o, n);
          for (let d = 0; d < i.length; d += 2) {
            const p = i[d];
            if (p > 0) r.push(a[d / 2]);
            else {
              const D = i[d + 1],
                S = t[-p];
              for (let O = 10; O < S.length; O++) {
                const V = S[O];
                V[17] === V[3] && pc(V[1], V, D, r);
              }
              if (null !== S[9]) {
                const O = S[9];
                for (let V = 0; V < O.length; V++) {
                  const $ = O[V];
                  pc($[1], $, D, r);
                }
              }
            }
          }
        }
        return r;
      }
      function ag(e) {
        const t = ve(),
          n = st(),
          r = g();
        b(r + 1);
        const o = fg(n, r);
        if (
          e.dirty &&
          (function Pi(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = o.crossesNgTemplate ? pc(n, t, r, []) : sg(n, t, o, r);
            e.reset(i, p_), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function lg(e, t, n, r) {
        const o = st();
        if (o.firstCreatePass) {
          const i = C();
          (function dg(e, t, n) {
            null === e.queries && (e.queries = new fc()),
              e.queries.track(new hc(t, n));
          })(o, new ig(t, n, r), i.index),
            (function f0(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        !(function cg(e, t, n) {
          const r = new lc(4 == (4 & n));
          Lf(e, t, r, r.destroy),
            null === t[19] && (t[19] = new dc()),
            t[19].queries.push(new cc(r));
        })(o, ve(), n);
      }
      function ug() {
        return (function d0(e, t) {
          return e[19].queries[t].queryList;
        })(ve(), g());
      }
      function fg(e, t) {
        return e.queries.getByIndex(t);
      }
      function tl(...e) {}
      const Og = new Tt("Application Initializer");
      let nl = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = tl),
              (this.reject = tl),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (zu(i)) n.push(i);
                else if (hh(i)) {
                  const a = new Promise((d, p) => {
                    i.subscribe({ complete: d, error: p });
                  });
                  n.push(a);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(un(Og, 8));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const Pg = new Tt("AppId", {
        providedIn: "root",
        factory: function Fg() {
          return `${yc()}${yc()}${yc()}`;
        },
      });
      function yc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Ng = new Tt("Platform Initializer"),
        F0 = new Tt("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        Rg = new Tt("appBootstrapListener");
      let N0 = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const rl = new Tt("LocaleId", {
          providedIn: "root",
          factory: () =>
            Yc(rl, N.Optional | N.SkipSelf) ||
            (function R0() {
              return (typeof $localize < "u" && $localize.locale) || gs;
            })(),
        }),
        k0 = new Tt("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD",
        });
      class L0 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let V0 = (() => {
        class e {
          compileModuleSync(n) {
            return new oc(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = yo(We(n).declarations).reduce((a, d) => {
                const p = F(d);
                return p && a.push(new zs(p)), a;
              }, []);
            return new L0(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const H0 = (() => Promise.resolve(0))();
      function Cc(e) {
        typeof Zone > "u"
          ? H0.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class Cr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new no(!1)),
            (this.onMicrotaskEmpty = new no(!1)),
            (this.onStable = new no(!1)),
            (this.onError = new no(!1)),
            typeof Zone > "u")
          )
            throw new K(908, !1);
          Zone.assertZonePatched();
          const o = this;
          if (
            ((o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.AsyncStackTaggingZoneSpec)
          ) {
            const i = Zone.AsyncStackTaggingZoneSpec;
            o._inner = o._inner.fork(new i("Angular"));
          }
          Zone.TaskTrackingZoneSpec &&
            (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function j0() {
              let e = Le.requestAnimationFrame,
                t = Le.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function z0(e) {
              const t = () => {
                !(function G0(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Le, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                wc(e),
                                (e.isCheckStableRunning = !0),
                                Dc(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    wc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, a, d) => {
                  try {
                    return Vg(e), n.invokeTask(o, i, a, d);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Bg(e);
                  }
                },
                onInvoke: (n, r, o, i, a, d, p) => {
                  try {
                    return Vg(e), n.invoke(o, i, a, d, p);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Bg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          wc(e),
                          Dc(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Cr.isInAngularZone()) throw new K(909, !1);
        }
        static assertNotInAngularZone() {
          if (Cr.isInAngularZone()) throw new K(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            a = i.scheduleEventTask("NgZoneEvent: " + o, t, $0, tl, tl);
          try {
            return i.runTask(a, n, r);
          } finally {
            i.cancelTask(a);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const $0 = {};
      function Dc(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function wc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Vg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Bg(e) {
        e._nesting--, Dc(e);
      }
      class Z0 {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new no()),
            (this.onMicrotaskEmpty = new no()),
            (this.onStable = new no()),
            (this.onError = new no());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      const Ug = new Tt(""),
        Hg = new Tt("");
      let bc,
        W0 = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngZone = n),
                (this.registry = r),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                bc ||
                  ((function Y0(e) {
                    bc = e;
                  })(o),
                  o.addToWindow(r)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Cr.assertNotInAngularZone(),
                        Cc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Cc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (a) => a.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(un(Cr), un(jg), un(Hg));
            }),
            (e.ɵprov = Mt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        jg = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return bc?.findTestabilityInTree(this, n, r) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Mt({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })(),
        Jo = null;
      const $g = new Tt("AllowMultipleToken"),
        Ec = new Tt("PlatformDestroyListeners");
      class K0 {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function zg(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new Tt(r);
        return (i = []) => {
          let a = Mc();
          if (!a || a.injector.get($g, !1)) {
            const d = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(d)
              : (function Q0(e) {
                  if (Jo && !Jo.get($g, !1)) throw new K(400, !1);
                  Jo = e;
                  const t = e.get(Wg);
                  (function Gg(e) {
                    const t = e.get(Ng, null);
                    t && t.forEach((n) => n());
                  })(e);
                })(
                  (function Zg(e = [], t) {
                    return wi.create({
                      name: t,
                      providers: [
                        { provide: Hl, useValue: "platform" },
                        { provide: Ec, useValue: new Set([() => (Jo = null)]) },
                        ...e,
                      ],
                    });
                  })(d, r)
                );
          }
          return (function ew(e) {
            const t = Mc();
            if (!t) throw new K(401, !1);
            return t;
          })();
        };
      }
      function Mc() {
        return Jo?.get(Wg) ?? null;
      }
      let Wg = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const o = (function qg(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new Z0()
                      : ("zone.js" === e ? void 0 : e) || new Cr(t)),
                  n
                );
              })(
                r?.ngZone,
                (function Yg(e) {
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      !(!e || !e.ngZoneEventCoalescing) || !1,
                    shouldCoalesceRunChangeDetection:
                      !(!e || !e.ngZoneRunCoalescing) || !1,
                  };
                })(r)
              ),
              i = [{ provide: Cr, useValue: o }];
            return o.run(() => {
              const a = wi.create({
                  providers: i,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                d = n.create(a),
                p = d.injector.get(Us, null);
              if (!p) throw new K(402, !1);
              return (
                o.runOutsideAngular(() => {
                  const D = o.onError.subscribe({
                    next: (S) => {
                      p.handleError(S);
                    },
                  });
                  d.onDestroy(() => {
                    il(this._modules, d), D.unsubscribe();
                  });
                }),
                (function Jg(e, t, n) {
                  try {
                    const r = n();
                    return zu(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(p, o, () => {
                  const D = d.injector.get(nl);
                  return (
                    D.runInitializers(),
                    D.donePromise.then(
                      () => (
                        (function dp(e) {
                          ut(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (cp = e.toLowerCase().replace(/_/g, "-"));
                        })(d.injector.get(rl, gs) || gs),
                        this._moduleDoBootstrap(d),
                        d
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = Kg({}, r);
            return (function q0(e, t, n) {
              const r = new oc(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(ol);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new K(403, !1);
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new K(404, !1);
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(Ec, null);
            n && (n.forEach((r) => r()), n.clear()), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(un(wi));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function Kg(e, t) {
        return Array.isArray(t) ? t.reduce(Kg, e) : { ...e, ...t };
      }
      let ol = (() => {
        class e {
          constructor(n, r, o) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new Z.y((d) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    d.next(this._stable), d.complete();
                  });
              }),
              a = new Z.y((d) => {
                let p;
                this._zone.runOutsideAngular(() => {
                  p = this._zone.onStable.subscribe(() => {
                    Cr.assertNotInAngularZone(),
                      Cc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), d.next(!0));
                      });
                  });
                });
                const D = this._zone.onUnstable.subscribe(() => {
                  Cr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        d.next(!1);
                      }));
                });
                return () => {
                  p.unsubscribe(), D.unsubscribe();
                };
              });
            this.isStable = (function se(...e) {
              const t = (0, _e.yG)(e),
                n = (0, _e._6)(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? (0, c.Xf)(r[0])
                  : (0, X.J)(n)((0, Q.D)(r, t))
                : we.E;
            })(
              i,
              a.pipe(
                (function he(e = {}) {
                  const {
                    connector: t = () => new f.x(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let a,
                      d,
                      p,
                      D = 0,
                      S = !1,
                      O = !1;
                    const V = () => {
                        d?.unsubscribe(), (d = void 0);
                      },
                      $ = () => {
                        V(), (a = p = void 0), (S = O = !1);
                      },
                      de = () => {
                        const be = a;
                        $(), be?.unsubscribe();
                      };
                    return (0, G.e)((be, xe) => {
                      D++, !O && !S && V();
                      const ke = (p = p ?? t());
                      xe.add(() => {
                        D--, 0 === D && !O && !S && (d = Ae(de, o));
                      }),
                        ke.subscribe(xe),
                        !a &&
                          D > 0 &&
                          ((a = new ie.Hp({
                            next: (Ge) => ke.next(Ge),
                            error: (Ge) => {
                              (O = !0), V(), (d = Ae($, n, Ge)), ke.error(Ge);
                            },
                            complete: () => {
                              (S = !0), V(), (d = Ae($, r)), ke.complete();
                            },
                          })),
                          (0, c.Xf)(be).subscribe(a));
                    })(i);
                  };
                })()
              )
            );
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof bd;
            if (!this._injector.get(nl).done)
              throw (!o && $e(n), new K(405, false));
            let a;
            (a = o ? n : this._injector.get(Vs).resolveComponentFactory(n)),
              this.componentTypes.push(a.componentType);
            const d = (function J0(e) {
                return e.isBoundToModule;
              })(a)
                ? void 0
                : this._injector.get(ms),
              D = a.create(wi.NULL, [], r || a.selector, d),
              S = D.location.nativeElement,
              O = D.injector.get(Ug, null);
            return (
              O?.registerApplication(S),
              D.onDestroy(() => {
                this.detachView(D.hostView),
                  il(this.components, D),
                  O?.unregisterApplication(S);
              }),
              this._loadComponent(D),
              D
            );
          }
          tick() {
            if (this._runningTick) throw new K(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            il(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Rg, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => il(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new K(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(un(Cr), un(Ci), un(Us));
          }),
          (e.ɵprov = Mt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function il(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let Xg = !0;
      function nw() {
        Xg = !1;
      }
      let rw = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = ow), e;
      })();
      function ow(e) {
        return (function iw(e, t, n) {
          if (Vt(e) && !n) {
            const r = wn(e.index, t);
            return new Gs(r, r);
          }
          return 47 & e.type ? new Gs(t[16], t) : null;
        })(C(), ve(), 16 == (16 & e));
      }
      class om {
        constructor() {}
        supports(t) {
          return Zs(t);
        }
        create(t) {
          return new dw(t);
        }
      }
      const cw = (e, t) => t;
      class dw {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || cw);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const a = !r || (n && n.currentIndex < sm(r, o, i)) ? n : r,
              d = sm(a, o, i),
              p = a.currentIndex;
            if (a === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == a.previousIndex)) o++;
            else {
              i || (i = []);
              const D = d - o,
                S = p - o;
              if (D != S) {
                for (let V = 0; V < D; V++) {
                  const $ = V < i.length ? i[V] : (i[V] = 0),
                    de = $ + V;
                  S <= de && de < D && (i[V] = $ + 1);
                }
                i[a.previousIndex] = S - D;
              }
            }
            d !== p && t(a, d, p);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Zs(t))) throw new K(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            a,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let d = 0; d < this.length; d++)
              (i = t[d]),
                (a = this._trackByFn(d, i)),
                null !== n && Object.is(n.trackById, a)
                  ? (r && (n = this._verifyReinsertion(n, i, a, d)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, a, d)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function Ny(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[bi()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (d) => {
                (a = this._trackByFn(o, d)),
                  null !== n && Object.is(n.trackById, a)
                    ? (r && (n = this._verifyReinsertion(n, d, a, o)),
                      Object.is(n.item, d) || this._addIdentityChange(n, d))
                    : ((n = this._mismatch(n, d, a, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new fw(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new im()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new im()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class fw {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class hw {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class im {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new hw()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function sm(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class am {
        constructor() {}
        supports(t) {
          return t instanceof Map || Uu(t);
        }
        create() {
          return new pw();
        }
      }
      class pw {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Uu(t))) throw new K(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              a = o._next;
            return (
              i && (i._next = a),
              a && (a._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new gw(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class gw {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function lm() {
        return new xc([new om()]);
      }
      let xc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || lm()),
              deps: [[e, new Ps(), new Os()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new K(901, !1);
          }
        }
        return (e.ɵprov = Mt({ token: e, providedIn: "root", factory: lm })), e;
      })();
      function um() {
        return new Oc([new am()]);
      }
      let Oc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || um()),
              deps: [[e, new Ps(), new Os()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (r) return r;
            throw new K(901, !1);
          }
        }
        return (e.ɵprov = Mt({ token: e, providedIn: "root", factory: um })), e;
      })();
      const vw = zg(null, "core", []);
      let yw = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(un(ol));
          }),
          (e.ɵmod = kn({ type: e })),
          (e.ɵinj = sn({})),
          e
        );
      })();
      function Cw(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
    },
    433: (Ze, me, x) => {
      x.d(me, {
        Fj: () => De,
        NI: () => Cn,
        u: () => Vn,
        cw: () => B,
        sg: () => Dn,
        u5: () => Wr,
        JJ: () => pe,
        JL: () => N,
        F: () => hr,
        On: () => Mo,
        YN: () => lo,
        c5: () => lr,
        UX: () => ii,
        Q7: () => rn,
        EJ: () => Tr,
        kI: () => j,
        _Y: () => So,
        Kr: () => nn,
      });
      var f = x(8256),
        w = x(6895),
        Z = x(2076),
        X = x(9751),
        c = x(4742),
        we = x(8421),
        _e = x(7669),
        Q = x(5403),
        se = x(3268),
        ie = x(1810),
        he = x(4004);
      let Ae = (() => {
          class C {
            constructor(m, T) {
              (this._renderer = m),
                (this._elementRef = T),
                (this.onChange = (re) => {}),
                (this.onTouched = () => {});
            }
            setProperty(m, T) {
              this._renderer.setProperty(this._elementRef.nativeElement, m, T);
            }
            registerOnTouched(m) {
              this.onTouched = m;
            }
            registerOnChange(m) {
              this.onChange = m;
            }
            setDisabledState(m) {
              this.setProperty("disabled", m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(f.Y36(f.Qsj), f.Y36(f.SBq));
            }),
            (C.ɵdir = f.lG2({ type: C })),
            C
          );
        })(),
        le = (() => {
          class C extends Ae {}
          return (
            (C.ɵfac = (function () {
              let y;
              return function (T) {
                return (y || (y = f.n5z(C)))(T || C);
              };
            })()),
            (C.ɵdir = f.lG2({ type: C, features: [f.qOj] })),
            C
          );
        })();
      const Oe = new f.OlP("NgValueAccessor"),
        je = { provide: Oe, useExisting: (0, f.Gpc)(() => De), multi: !0 },
        ce = new f.OlP("CompositionEventMode");
      let De = (() => {
        class C extends Ae {
          constructor(m, T, re) {
            super(m, T),
              (this._compositionMode = re),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function ht() {
                  const C = (0, w.q)() ? (0, w.q)().getUserAgent() : "";
                  return /android (\d+)/.test(C.toLowerCase());
                })());
          }
          writeValue(m) {
            this.setProperty("value", m ?? "");
          }
          _handleInput(m) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(m);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(m) {
            (this._composing = !1), this._compositionMode && this.onChange(m);
          }
        }
        return (
          (C.ɵfac = function (m) {
            return new (m || C)(f.Y36(f.Qsj), f.Y36(f.SBq), f.Y36(ce, 8));
          }),
          (C.ɵdir = f.lG2({
            type: C,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (m, T) {
              1 & m &&
                f.NdJ("input", function (Ve) {
                  return T._handleInput(Ve.target.value);
                })("blur", function () {
                  return T.onTouched();
                })("compositionstart", function () {
                  return T._compositionStart();
                })("compositionend", function (Ve) {
                  return T._compositionEnd(Ve.target.value);
                });
            },
            features: [f._Bn([je]), f.qOj],
          })),
          C
        );
      })();
      function K(C) {
        return (
          null == C ||
          (("string" == typeof C || Array.isArray(C)) && 0 === C.length)
        );
      }
      function Ee(C) {
        return null != C && "number" == typeof C.length;
      }
      const ne = new f.OlP("NgValidators"),
        ae = new f.OlP("NgAsyncValidators"),
        Pe =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class j {
        static min(y) {
          return (function W(C) {
            return (y) => {
              if (K(y.value) || K(C)) return null;
              const m = parseFloat(y.value);
              return !isNaN(m) && m < C
                ? { min: { min: C, actual: y.value } }
                : null;
            };
          })(y);
        }
        static max(y) {
          return (function oe(C) {
            return (y) => {
              if (K(y.value) || K(C)) return null;
              const m = parseFloat(y.value);
              return !isNaN(m) && m > C
                ? { max: { max: C, actual: y.value } }
                : null;
            };
          })(y);
        }
        static required(y) {
          return z(y);
        }
        static requiredTrue(y) {
          return (function Te(C) {
            return !0 === C.value ? null : { required: !0 };
          })(y);
        }
        static email(y) {
          return (function fe(C) {
            return K(C.value) || Pe.test(C.value) ? null : { email: !0 };
          })(y);
        }
        static minLength(y) {
          return (function He(C) {
            return (y) =>
              K(y.value) || !Ee(y.value)
                ? null
                : y.value.length < C
                ? {
                    minlength: {
                      requiredLength: C,
                      actualLength: y.value.length,
                    },
                  }
                : null;
          })(y);
        }
        static maxLength(y) {
          return (function qe(C) {
            return (y) =>
              Ee(y.value) && y.value.length > C
                ? {
                    maxlength: {
                      requiredLength: C,
                      actualLength: y.value.length,
                    },
                  }
                : null;
          })(y);
        }
        static pattern(y) {
          return zt(y);
        }
        static nullValidator(y) {
          return null;
        }
        static compose(y) {
          return ut(y);
        }
        static composeAsync(y) {
          return $n(y);
        }
      }
      function z(C) {
        return K(C.value) ? { required: !0 } : null;
      }
      function zt(C) {
        if (!C) return ze;
        let y, m;
        return (
          "string" == typeof C
            ? ((m = ""),
              "^" !== C.charAt(0) && (m += "^"),
              (m += C),
              "$" !== C.charAt(C.length - 1) && (m += "$"),
              (y = new RegExp(m)))
            : ((m = C.toString()), (y = C)),
          (T) => {
            if (K(T.value)) return null;
            const re = T.value;
            return y.test(re)
              ? null
              : { pattern: { requiredPattern: m, actualValue: re } };
          }
        );
      }
      function ze(C) {
        return null;
      }
      function dt(C) {
        return null != C;
      }
      function qt(C) {
        return (0, f.QGY)(C) ? (0, Z.D)(C) : C;
      }
      function yt(C) {
        let y = {};
        return (
          C.forEach((m) => {
            y = null != m ? { ...y, ...m } : y;
          }),
          0 === Object.keys(y).length ? null : y
        );
      }
      function Jt(C, y) {
        return y.map((m) => m(C));
      }
      function Ct(C) {
        return C.map((y) =>
          (function Nt(C) {
            return !C.validate;
          })(y)
            ? y
            : (m) => y.validate(m)
        );
      }
      function ut(C) {
        if (!C) return null;
        const y = C.filter(dt);
        return 0 == y.length
          ? null
          : function (m) {
              return yt(Jt(m, y));
            };
      }
      function tt(C) {
        return null != C ? ut(Ct(C)) : null;
      }
      function $n(C) {
        if (!C) return null;
        const y = C.filter(dt);
        return 0 == y.length
          ? null
          : function (m) {
              return (function G(...C) {
                const y = (0, _e.jO)(C),
                  { args: m, keys: T } = (0, c.D)(C),
                  re = new X.y((Ve) => {
                    const { length: Bt } = m;
                    if (!Bt) return void Ve.complete();
                    const Pn = new Array(Bt);
                    let xr = Bt,
                      Or = Bt;
                    for (let Yt = 0; Yt < Bt; Yt++) {
                      let gn = !1;
                      (0, we.Xf)(m[Yt]).subscribe(
                        (0, Q.x)(
                          Ve,
                          (Pr) => {
                            gn || ((gn = !0), Or--), (Pn[Yt] = Pr);
                          },
                          () => xr--,
                          void 0,
                          () => {
                            (!xr || !gn) &&
                              (Or || Ve.next(T ? (0, ie.n)(T, Pn) : Pn),
                              Ve.complete());
                          }
                        )
                      );
                    }
                  });
                return y ? re.pipe((0, se.Z)(y)) : re;
              })(Jt(m, y).map(qt)).pipe((0, he.U)(yt));
            };
      }
      function Gn(C) {
        return null != C ? $n(Ct(C)) : null;
      }
      function Sn(C, y) {
        return null === C ? [y] : Array.isArray(C) ? [...C, y] : [C, y];
      }
      function Mt(C) {
        return C._rawValidators;
      }
      function An(C) {
        return C._rawAsyncValidators;
      }
      function sn(C) {
        return C ? (Array.isArray(C) ? C : [C]) : [];
      }
      function Xt(C, y) {
        return Array.isArray(C) ? C.includes(y) : C === y;
      }
      function Tn(C, y) {
        const m = sn(y);
        return (
          sn(C).forEach((re) => {
            Xt(m, re) || m.push(re);
          }),
          m
        );
      }
      function Be(C, y) {
        return sn(y).filter((m) => !Xt(C, m));
      }
      class an {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(y) {
          (this._rawValidators = y || []),
            (this._composedValidatorFn = tt(this._rawValidators));
        }
        _setAsyncValidators(y) {
          (this._rawAsyncValidators = y || []),
            (this._composedAsyncValidatorFn = Gn(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(y) {
          this._onDestroyCallbacks.push(y);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((y) => y()),
            (this._onDestroyCallbacks = []);
        }
        reset(y) {
          this.control && this.control.reset(y);
        }
        hasError(y, m) {
          return !!this.control && this.control.hasError(y, m);
        }
        getError(y, m) {
          return this.control ? this.control.getError(y, m) : null;
        }
      }
      class Rt extends an {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Ut extends an {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class _n {
        constructor(y) {
          this._cd = y;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let pe = (() => {
          class C extends _n {
            constructor(m) {
              super(m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(f.Y36(Ut, 2));
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""],
              ],
              hostVars: 14,
              hostBindings: function (m, T) {
                2 & m &&
                  f.ekj("ng-untouched", T.isUntouched)(
                    "ng-touched",
                    T.isTouched
                  )("ng-pristine", T.isPristine)("ng-dirty", T.isDirty)(
                    "ng-valid",
                    T.isValid
                  )("ng-invalid", T.isInvalid)("ng-pending", T.isPending);
              },
              features: [f.qOj],
            })),
            C
          );
        })(),
        N = (() => {
          class C extends _n {
            constructor(m) {
              super(m);
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(f.Y36(Rt, 10));
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""],
              ],
              hostVars: 16,
              hostBindings: function (m, T) {
                2 & m &&
                  f.ekj("ng-untouched", T.isUntouched)(
                    "ng-touched",
                    T.isTouched
                  )("ng-pristine", T.isPristine)("ng-dirty", T.isDirty)(
                    "ng-valid",
                    T.isValid
                  )("ng-invalid", T.isInvalid)("ng-pending", T.isPending)(
                    "ng-submitted",
                    T.isSubmitted
                  );
              },
              features: [f.qOj],
            })),
            C
          );
        })();
      const dn = "VALID",
        Ft = "INVALID",
        vn = "PENDING",
        zn = "DISABLED";
      function Zn(C) {
        return (kn(C) ? C.validators : C) || null;
      }
      function ro(C) {
        return Array.isArray(C) ? tt(C) : C || null;
      }
      function Wn(C, y) {
        return (kn(y) ? y.asyncValidators : C) || null;
      }
      function Yn(C) {
        return Array.isArray(C) ? Gn(C) : C || null;
      }
      function kn(C) {
        return null != C && !Array.isArray(C) && "object" == typeof C;
      }
      class q {
        constructor(y, m) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = y),
            (this._rawAsyncValidators = m),
            (this._composedValidatorFn = ro(this._rawValidators)),
            (this._composedAsyncValidatorFn = Yn(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(y) {
          this._rawValidators = this._composedValidatorFn = y;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(y) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = y;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === dn;
        }
        get invalid() {
          return this.status === Ft;
        }
        get pending() {
          return this.status == vn;
        }
        get disabled() {
          return this.status === zn;
        }
        get enabled() {
          return this.status !== zn;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(y) {
          (this._rawValidators = y), (this._composedValidatorFn = ro(y));
        }
        setAsyncValidators(y) {
          (this._rawAsyncValidators = y),
            (this._composedAsyncValidatorFn = Yn(y));
        }
        addValidators(y) {
          this.setValidators(Tn(y, this._rawValidators));
        }
        addAsyncValidators(y) {
          this.setAsyncValidators(Tn(y, this._rawAsyncValidators));
        }
        removeValidators(y) {
          this.setValidators(Be(y, this._rawValidators));
        }
        removeAsyncValidators(y) {
          this.setAsyncValidators(Be(y, this._rawAsyncValidators));
        }
        hasValidator(y) {
          return Xt(this._rawValidators, y);
        }
        hasAsyncValidator(y) {
          return Xt(this._rawAsyncValidators, y);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(y = {}) {
          (this.touched = !0),
            this._parent && !y.onlySelf && this._parent.markAsTouched(y);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((y) => y.markAllAsTouched());
        }
        markAsUntouched(y = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((m) => {
              m.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        markAsDirty(y = {}) {
          (this.pristine = !1),
            this._parent && !y.onlySelf && this._parent.markAsDirty(y);
        }
        markAsPristine(y = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((m) => {
              m.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        markAsPending(y = {}) {
          (this.status = vn),
            !1 !== y.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !y.onlySelf && this._parent.markAsPending(y);
        }
        disable(y = {}) {
          const m = this._parentMarkedDirty(y.onlySelf);
          (this.status = zn),
            (this.errors = null),
            this._forEachChild((T) => {
              T.disable({ ...y, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...y, skipPristineCheck: m }),
            this._onDisabledChange.forEach((T) => T(!0));
        }
        enable(y = {}) {
          const m = this._parentMarkedDirty(y.onlySelf);
          (this.status = dn),
            this._forEachChild((T) => {
              T.enable({ ...y, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            }),
            this._updateAncestors({ ...y, skipPristineCheck: m }),
            this._onDisabledChange.forEach((T) => T(!1));
        }
        _updateAncestors(y) {
          this._parent &&
            !y.onlySelf &&
            (this._parent.updateValueAndValidity(y),
            y.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(y) {
          this._parent = y;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(y = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === dn || this.status === vn) &&
                this._runAsyncValidator(y.emitEvent)),
            !1 !== y.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !y.onlySelf &&
              this._parent.updateValueAndValidity(y);
        }
        _updateTreeValidity(y = { emitEvent: !0 }) {
          this._forEachChild((m) => m._updateTreeValidity(y)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: y.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? zn : dn;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(y) {
          if (this.asyncValidator) {
            (this.status = vn), (this._hasOwnPendingAsyncValidator = !0);
            const m = qt(this.asyncValidator(this));
            this._asyncValidationSubscription = m.subscribe((T) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(T, { emitEvent: y });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(y, m = {}) {
          (this.errors = y), this._updateControlsErrors(!1 !== m.emitEvent);
        }
        get(y) {
          let m = y;
          return null == m ||
            (Array.isArray(m) || (m = m.split(".")), 0 === m.length)
            ? null
            : m.reduce((T, re) => T && T._find(re), this);
        }
        getError(y, m) {
          const T = m ? this.get(m) : this;
          return T && T.errors ? T.errors[y] : null;
        }
        hasError(y, m) {
          return !!this.getError(y, m);
        }
        get root() {
          let y = this;
          for (; y._parent; ) y = y._parent;
          return y;
        }
        _updateControlsErrors(y) {
          (this.status = this._calculateStatus()),
            y && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(y);
        }
        _initObservables() {
          (this.valueChanges = new f.vpe()), (this.statusChanges = new f.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? zn
            : this.errors
            ? Ft
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(vn)
            ? vn
            : this._anyControlsHaveStatus(Ft)
            ? Ft
            : dn;
        }
        _anyControlsHaveStatus(y) {
          return this._anyControls((m) => m.status === y);
        }
        _anyControlsDirty() {
          return this._anyControls((y) => y.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((y) => y.touched);
        }
        _updatePristine(y = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !y.onlySelf && this._parent._updatePristine(y);
        }
        _updateTouched(y = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !y.onlySelf && this._parent._updateTouched(y);
        }
        _registerOnCollectionChange(y) {
          this._onCollectionChange = y;
        }
        _setUpdateStrategy(y) {
          kn(y) && null != y.updateOn && (this._updateOn = y.updateOn);
        }
        _parentMarkedDirty(y) {
          return (
            !y &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(y) {
          return null;
        }
      }
      class B extends q {
        constructor(y, m, T) {
          super(Zn(m), Wn(T, m)),
            (this.controls = y),
            this._initObservables(),
            this._setUpdateStrategy(m),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(y, m) {
          return this.controls[y]
            ? this.controls[y]
            : ((this.controls[y] = m),
              m.setParent(this),
              m._registerOnCollectionChange(this._onCollectionChange),
              m);
        }
        addControl(y, m, T = {}) {
          this.registerControl(y, m),
            this.updateValueAndValidity({ emitEvent: T.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(y, m = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            this.updateValueAndValidity({ emitEvent: m.emitEvent }),
            this._onCollectionChange();
        }
        setControl(y, m, T = {}) {
          this.controls[y] &&
            this.controls[y]._registerOnCollectionChange(() => {}),
            delete this.controls[y],
            m && this.registerControl(y, m),
            this.updateValueAndValidity({ emitEvent: T.emitEvent }),
            this._onCollectionChange();
        }
        contains(y) {
          return this.controls.hasOwnProperty(y) && this.controls[y].enabled;
        }
        setValue(y, m = {}) {
          (function Dr(C, y, m) {
            C._forEachChild((T, re) => {
              if (void 0 === m[re]) throw new f.vHH(1002, "");
            });
          })(this, 0, y),
            Object.keys(y).forEach((T) => {
              (function sr(C, y, m) {
                const T = C.controls;
                if (!(y ? Object.keys(T) : T).length) throw new f.vHH(1e3, "");
                if (!T[m]) throw new f.vHH(1001, "");
              })(this, !0, T),
                this.controls[T].setValue(y[T], {
                  onlySelf: !0,
                  emitEvent: m.emitEvent,
                });
            }),
            this.updateValueAndValidity(m);
        }
        patchValue(y, m = {}) {
          null != y &&
            (Object.keys(y).forEach((T) => {
              const re = this.controls[T];
              re &&
                re.patchValue(y[T], { onlySelf: !0, emitEvent: m.emitEvent });
            }),
            this.updateValueAndValidity(m));
        }
        reset(y = {}, m = {}) {
          this._forEachChild((T, re) => {
            T.reset(y[re], { onlySelf: !0, emitEvent: m.emitEvent });
          }),
            this._updatePristine(m),
            this._updateTouched(m),
            this.updateValueAndValidity(m);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (y, m, T) => ((y[T] = m.getRawValue()), y)
          );
        }
        _syncPendingControls() {
          let y = this._reduceChildren(
            !1,
            (m, T) => !!T._syncPendingControls() || m
          );
          return y && this.updateValueAndValidity({ onlySelf: !0 }), y;
        }
        _forEachChild(y) {
          Object.keys(this.controls).forEach((m) => {
            const T = this.controls[m];
            T && y(T, m);
          });
        }
        _setUpControls() {
          this._forEachChild((y) => {
            y.setParent(this),
              y._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(y) {
          for (const [m, T] of Object.entries(this.controls))
            if (this.contains(m) && y(T)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (m, T, re) => ((T.enabled || this.disabled) && (m[re] = T.value), m)
          );
        }
        _reduceChildren(y, m) {
          let T = y;
          return (
            this._forEachChild((re, Ve) => {
              T = m(T, re, Ve);
            }),
            T
          );
        }
        _allControlsDisabled() {
          for (const y of Object.keys(this.controls))
            if (this.controls[y].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(y) {
          return this.controls.hasOwnProperty(y) ? this.controls[y] : null;
        }
      }
      function We(C, y) {
        return [...y.path, C];
      }
      function lt(C, y) {
        Wt(C, y),
          y.valueAccessor.writeValue(C.value),
          C.disabled && y.valueAccessor.setDisabledState?.(!0),
          (function Lt(C, y) {
            y.valueAccessor.registerOnChange((m) => {
              (C._pendingValue = m),
                (C._pendingChange = !0),
                (C._pendingDirty = !0),
                "change" === C.updateOn && At(C, y);
            });
          })(C, y),
          (function fn(C, y) {
            const m = (T, re) => {
              y.valueAccessor.writeValue(T), re && y.viewToModelUpdate(T);
            };
            C.registerOnChange(m),
              y._registerOnDestroy(() => {
                C._unregisterOnChange(m);
              });
          })(C, y),
          (function xn(C, y) {
            y.valueAccessor.registerOnTouched(() => {
              (C._pendingTouched = !0),
                "blur" === C.updateOn && C._pendingChange && At(C, y),
                "submit" !== C.updateOn && C.markAsTouched();
            });
          })(C, y),
          (function wt(C, y) {
            if (y.valueAccessor.setDisabledState) {
              const m = (T) => {
                y.valueAccessor.setDisabledState(T);
              };
              C.registerOnDisabledChange(m),
                y._registerOnDestroy(() => {
                  C._unregisterOnDisabledChange(m);
                });
            }
          })(C, y);
      }
      function Se(C, y, m = !0) {
        const T = () => {};
        y.valueAccessor &&
          (y.valueAccessor.registerOnChange(T),
          y.valueAccessor.registerOnTouched(T)),
          In(C, y),
          C &&
            (y._invokeOnDestroyCallbacks(),
            C._registerOnCollectionChange(() => {}));
      }
      function Ye(C, y) {
        C.forEach((m) => {
          m.registerOnValidatorChange && m.registerOnValidatorChange(y);
        });
      }
      function Wt(C, y) {
        const m = Mt(C);
        null !== y.validator
          ? C.setValidators(Sn(m, y.validator))
          : "function" == typeof m && C.setValidators([m]);
        const T = An(C);
        null !== y.asyncValidator
          ? C.setAsyncValidators(Sn(T, y.asyncValidator))
          : "function" == typeof T && C.setAsyncValidators([T]);
        const re = () => C.updateValueAndValidity();
        Ye(y._rawValidators, re), Ye(y._rawAsyncValidators, re);
      }
      function In(C, y) {
        let m = !1;
        if (null !== C) {
          if (null !== y.validator) {
            const re = Mt(C);
            if (Array.isArray(re) && re.length > 0) {
              const Ve = re.filter((Bt) => Bt !== y.validator);
              Ve.length !== re.length && ((m = !0), C.setValidators(Ve));
            }
          }
          if (null !== y.asyncValidator) {
            const re = An(C);
            if (Array.isArray(re) && re.length > 0) {
              const Ve = re.filter((Bt) => Bt !== y.asyncValidator);
              Ve.length !== re.length && ((m = !0), C.setAsyncValidators(Ve));
            }
          }
        }
        const T = () => {};
        return Ye(y._rawValidators, T), Ye(y._rawAsyncValidators, T), m;
      }
      function At(C, y) {
        C._pendingDirty && C.markAsDirty(),
          C.setValue(C._pendingValue, { emitModelToViewChange: !1 }),
          y.viewToModelUpdate(C._pendingValue),
          (C._pendingChange = !1);
      }
      function Ln(C, y) {
        Wt(C, y);
      }
      function Pt(C, y) {
        if (!C.hasOwnProperty("model")) return !1;
        const m = C.model;
        return !!m.isFirstChange() || !Object.is(y, m.currentValue);
      }
      function qn(C, y) {
        C._syncPendingControls(),
          y.forEach((m) => {
            const T = m.control;
            "submit" === T.updateOn &&
              T._pendingChange &&
              (m.viewToModelUpdate(T._pendingValue), (T._pendingChange = !1));
          });
      }
      function en(C, y) {
        if (!y) return null;
        let m, T, re;
        return (
          Array.isArray(y),
          y.forEach((Ve) => {
            Ve.constructor === De
              ? (m = Ve)
              : (function yn(C) {
                  return Object.getPrototypeOf(C.constructor) === le;
                })(Ve)
              ? (T = Ve)
              : (re = Ve);
          }),
          re || T || m || null
        );
      }
      const bt = { provide: Rt, useExisting: (0, f.Gpc)(() => hr) },
        br = (() => Promise.resolve())();
      let hr = (() => {
        class C extends Rt {
          constructor(m, T) {
            super(),
              (this.submitted = !1),
              (this._directives = new Set()),
              (this.ngSubmit = new f.vpe()),
              (this.form = new B({}, tt(m), Gn(T)));
          }
          ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          get controls() {
            return this.form.controls;
          }
          addControl(m) {
            br.then(() => {
              const T = this._findContainer(m.path);
              (m.control = T.registerControl(m.name, m.control)),
                lt(m.control, m),
                m.control.updateValueAndValidity({ emitEvent: !1 }),
                this._directives.add(m);
            });
          }
          getControl(m) {
            return this.form.get(m.path);
          }
          removeControl(m) {
            br.then(() => {
              const T = this._findContainer(m.path);
              T && T.removeControl(m.name), this._directives.delete(m);
            });
          }
          addFormGroup(m) {
            br.then(() => {
              const T = this._findContainer(m.path),
                re = new B({});
              Ln(re, m),
                T.registerControl(m.name, re),
                re.updateValueAndValidity({ emitEvent: !1 });
            });
          }
          removeFormGroup(m) {
            br.then(() => {
              const T = this._findContainer(m.path);
              T && T.removeControl(m.name);
            });
          }
          getFormGroup(m) {
            return this.form.get(m.path);
          }
          updateModel(m, T) {
            br.then(() => {
              this.form.get(m.path).setValue(T);
            });
          }
          setValue(m) {
            this.control.setValue(m);
          }
          onSubmit(m) {
            return (
              (this.submitted = !0),
              qn(this.form, this._directives),
              this.ngSubmit.emit(m),
              "dialog" === m?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(m) {
            this.form.reset(m), (this.submitted = !1);
          }
          _setUpdateStrategy() {
            this.options &&
              null != this.options.updateOn &&
              (this.form._updateOn = this.options.updateOn);
          }
          _findContainer(m) {
            return m.pop(), m.length ? this.form.get(m) : this.form;
          }
        }
        return (
          (C.ɵfac = function (m) {
            return new (m || C)(f.Y36(ne, 10), f.Y36(ae, 10));
          }),
          (C.ɵdir = f.lG2({
            type: C,
            selectors: [
              ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
              ["ng-form"],
              ["", "ngForm", ""],
            ],
            hostBindings: function (m, T) {
              1 & m &&
                f.NdJ("submit", function (Ve) {
                  return T.onSubmit(Ve);
                })("reset", function () {
                  return T.onReset();
                });
            },
            inputs: { options: ["ngFormOptions", "options"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [f._Bn([bt]), f.qOj],
          })),
          C
        );
      })();
      function ar(C, y) {
        const m = C.indexOf(y);
        m > -1 && C.splice(m, 1);
      }
      function Kn(C) {
        return (
          "object" == typeof C &&
          null !== C &&
          2 === Object.keys(C).length &&
          "value" in C &&
          "disabled" in C
        );
      }
      const Cn = class extends q {
          constructor(y = null, m, T) {
            super(Zn(m), Wn(T, m)),
              (this.defaultValue = null),
              (this._onChange = []),
              (this._pendingChange = !1),
              this._applyFormState(y),
              this._setUpdateStrategy(m),
              this._initObservables(),
              this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
              }),
              kn(m) &&
                (m.nonNullable || m.initialValueIsDefault) &&
                (this.defaultValue = Kn(y) ? y.value : y);
          }
          setValue(y, m = {}) {
            (this.value = this._pendingValue = y),
              this._onChange.length &&
                !1 !== m.emitModelToViewChange &&
                this._onChange.forEach((T) =>
                  T(this.value, !1 !== m.emitViewToModelChange)
                ),
              this.updateValueAndValidity(m);
          }
          patchValue(y, m = {}) {
            this.setValue(y, m);
          }
          reset(y = this.defaultValue, m = {}) {
            this._applyFormState(y),
              this.markAsPristine(m),
              this.markAsUntouched(m),
              this.setValue(this.value, m),
              (this._pendingChange = !1);
          }
          _updateValue() {}
          _anyControls(y) {
            return !1;
          }
          _allControlsDisabled() {
            return this.disabled;
          }
          registerOnChange(y) {
            this._onChange.push(y);
          }
          _unregisterOnChange(y) {
            ar(this._onChange, y);
          }
          registerOnDisabledChange(y) {
            this._onDisabledChange.push(y);
          }
          _unregisterOnDisabledChange(y) {
            ar(this._onDisabledChange, y);
          }
          _forEachChild(y) {}
          _syncPendingControls() {
            return !(
              "submit" !== this.updateOn ||
              (this._pendingDirty && this.markAsDirty(),
              this._pendingTouched && this.markAsTouched(),
              !this._pendingChange) ||
              (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1,
              }),
              0)
            );
          }
          _applyFormState(y) {
            Kn(y)
              ? ((this.value = this._pendingValue = y.value),
                y.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
              : (this.value = this._pendingValue = y);
          }
        },
        pn = { provide: Ut, useExisting: (0, f.Gpc)(() => Mo) },
        Eo = (() => Promise.resolve())();
      let Mo = (() => {
          class C extends Ut {
            constructor(m, T, re, Ve, Bt) {
              super(),
                (this._changeDetectorRef = Bt),
                (this.control = new Cn()),
                (this._registered = !1),
                (this.update = new f.vpe()),
                (this._parent = m),
                this._setValidators(T),
                this._setAsyncValidators(re),
                (this.valueAccessor = en(0, Ve));
            }
            ngOnChanges(m) {
              if ((this._checkForErrors(), !this._registered || "name" in m)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const T = m.name.previousValue;
                  this.formDirective.removeControl({
                    name: T,
                    path: this._getPath(T),
                  });
                }
                this._setUpControl();
              }
              "isDisabled" in m && this._updateDisabled(m),
                Pt(m, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(m) {
              (this.viewModel = m), this.update.emit(m);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              lt(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(m) {
              Eo.then(() => {
                this.control.setValue(m, { emitViewToModelChange: !1 }),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _updateDisabled(m) {
              const T = m.isDisabled.currentValue,
                re = 0 !== T && (0, f.D6c)(T);
              Eo.then(() => {
                re && !this.control.disabled
                  ? this.control.disable()
                  : !re && this.control.disabled && this.control.enable(),
                  this._changeDetectorRef?.markForCheck();
              });
            }
            _getPath(m) {
              return this._parent ? We(m, this._parent) : [m];
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(
                f.Y36(Rt, 9),
                f.Y36(ne, 10),
                f.Y36(ae, 10),
                f.Y36(Oe, 10),
                f.Y36(f.sBO, 8)
              );
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [f._Bn([pn]), f.qOj, f.TTD],
            })),
            C
          );
        })(),
        So = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
              ],
              hostAttrs: ["novalidate", ""],
            })),
            C
          );
        })(),
        ei = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = f.oAB({ type: C })),
            (C.ɵinj = f.cJS({})),
            C
          );
        })();
      const To = new f.OlP("NgModelWithFormControlWarning"),
        ao = { provide: Rt, useExisting: (0, f.Gpc)(() => Dn) };
      let Dn = (() => {
        class C extends Rt {
          constructor(m, T) {
            super(),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new f.vpe()),
              this._setValidators(m),
              this._setAsyncValidators(T);
          }
          ngOnChanges(m) {
            this._checkFormPresent(),
              m.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (In(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(m) {
            const T = this.form.get(m.path);
            return (
              lt(T, m),
              T.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(m),
              T
            );
          }
          getControl(m) {
            return this.form.get(m.path);
          }
          removeControl(m) {
            Se(m.control || null, m, !1),
              (function Jn(C, y) {
                const m = C.indexOf(y);
                m > -1 && C.splice(m, 1);
              })(this.directives, m);
          }
          addFormGroup(m) {
            this._setUpFormContainer(m);
          }
          removeFormGroup(m) {
            this._cleanUpFormContainer(m);
          }
          getFormGroup(m) {
            return this.form.get(m.path);
          }
          addFormArray(m) {
            this._setUpFormContainer(m);
          }
          removeFormArray(m) {
            this._cleanUpFormContainer(m);
          }
          getFormArray(m) {
            return this.form.get(m.path);
          }
          updateModel(m, T) {
            this.form.get(m.path).setValue(T);
          }
          onSubmit(m) {
            return (
              (this.submitted = !0),
              qn(this.form, this.directives),
              this.ngSubmit.emit(m),
              "dialog" === m?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(m) {
            this.form.reset(m), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((m) => {
              const T = m.control,
                re = this.form.get(m.path);
              T !== re &&
                (Se(T || null, m),
                ((C) => C instanceof Cn)(re) && (lt(re, m), (m.control = re)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(m) {
            const T = this.form.get(m.path);
            Ln(T, m), T.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(m) {
            if (this.form) {
              const T = this.form.get(m.path);
              T &&
                (function rt(C, y) {
                  return In(C, y);
                })(T, m) &&
                T.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Wt(this.form, this), this._oldForm && In(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (C.ɵfac = function (m) {
            return new (m || C)(f.Y36(ne, 10), f.Y36(ae, 10));
          }),
          (C.ɵdir = f.lG2({
            type: C,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (m, T) {
              1 & m &&
                f.NdJ("submit", function (Ve) {
                  return T.onSubmit(Ve);
                })("reset", function () {
                  return T.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [f._Bn([ao]), f.qOj, f.TTD],
          })),
          C
        );
      })();
      const xi = { provide: Ut, useExisting: (0, f.Gpc)(() => Vn) };
      let Vn = (() => {
        class C extends Ut {
          constructor(m, T, re, Ve, Bt) {
            super(),
              (this._ngModelWarningConfig = Bt),
              (this._added = !1),
              (this.update = new f.vpe()),
              (this._ngModelWarningSent = !1),
              (this._parent = m),
              this._setValidators(T),
              this._setAsyncValidators(re),
              (this.valueAccessor = en(0, Ve));
          }
          set isDisabled(m) {}
          ngOnChanges(m) {
            this._added || this._setUpControl(),
              Pt(m, this.viewModel) &&
                ((this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(m) {
            (this.viewModel = m), this.update.emit(m);
          }
          get path() {
            return We(
              null == this.name ? this.name : this.name.toString(),
              this._parent
            );
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              (this._added = !0);
          }
        }
        return (
          (C._ngModelWarningSentOnce = !1),
          (C.ɵfac = function (m) {
            return new (m || C)(
              f.Y36(Rt, 13),
              f.Y36(ne, 10),
              f.Y36(ae, 10),
              f.Y36(Oe, 10),
              f.Y36(To, 8)
            );
          }),
          (C.ɵdir = f.lG2({
            type: C,
            selectors: [["", "formControlName", ""]],
            inputs: {
              name: ["formControlName", "name"],
              isDisabled: ["disabled", "isDisabled"],
              model: ["ngModel", "model"],
            },
            outputs: { update: "ngModelChange" },
            features: [f._Bn([xi]), f.qOj, f.TTD],
          })),
          C
        );
      })();
      const Sr = { provide: Oe, useExisting: (0, f.Gpc)(() => Tr), multi: !0 };
      function Ar(C, y) {
        return null == C
          ? `${y}`
          : (y && "object" == typeof y && (y = "Object"),
            `${C}: ${y}`.slice(0, 50));
      }
      let Tr = (() => {
          class C extends le {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              this.value = m;
              const re = Ar(this._getOptionId(m), m);
              this.setProperty("value", re);
            }
            registerOnChange(m) {
              this.onChange = (T) => {
                (this.value = this._getOptionValue(T)), m(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(m) {
              for (const T of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(T), m)) return T;
              return null;
            }
            _getOptionValue(m) {
              const T = (function Ur(C) {
                return C.split(":")[0];
              })(m);
              return this._optionMap.has(T) ? this._optionMap.get(T) : m;
            }
          }
          return (
            (C.ɵfac = (function () {
              let y;
              return function (T) {
                return (y || (y = f.n5z(C)))(T || C);
              };
            })()),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["select", "formControlName", "", 3, "multiple", ""],
                ["select", "formControl", "", 3, "multiple", ""],
                ["select", "ngModel", "", 3, "multiple", ""],
              ],
              hostBindings: function (m, T) {
                1 & m &&
                  f.NdJ("change", function (Ve) {
                    return T.onChange(Ve.target.value);
                  })("blur", function () {
                    return T.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [f._Bn([Sr]), f.qOj],
            })),
            C
          );
        })(),
        lo = (() => {
          class C {
            constructor(m, T, re) {
              (this._element = m),
                (this._renderer = T),
                (this._select = re),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(m) {
              null != this._select &&
                (this._select._optionMap.set(this.id, m),
                this._setElementValue(Ar(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._setElementValue(m),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(f.Y36(f.SBq), f.Y36(f.Qsj), f.Y36(Tr, 9));
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            C
          );
        })();
      const uo = { provide: Oe, useExisting: (0, f.Gpc)(() => co), multi: !0 };
      function Io(C, y) {
        return null == C
          ? `${y}`
          : ("string" == typeof y && (y = `'${y}'`),
            y && "object" == typeof y && (y = "Object"),
            `${C}: ${y}`.slice(0, 50));
      }
      let co = (() => {
          class C extends le {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(m) {
              this._compareWith = m;
            }
            writeValue(m) {
              let T;
              if (((this.value = m), Array.isArray(m))) {
                const re = m.map((Ve) => this._getOptionId(Ve));
                T = (Ve, Bt) => {
                  Ve._setSelected(re.indexOf(Bt.toString()) > -1);
                };
              } else
                T = (re, Ve) => {
                  re._setSelected(!1);
                };
              this._optionMap.forEach(T);
            }
            registerOnChange(m) {
              this.onChange = (T) => {
                const re = [],
                  Ve = T.selectedOptions;
                if (void 0 !== Ve) {
                  const Bt = Ve;
                  for (let Pn = 0; Pn < Bt.length; Pn++) {
                    const Or = this._getOptionValue(Bt[Pn].value);
                    re.push(Or);
                  }
                } else {
                  const Bt = T.options;
                  for (let Pn = 0; Pn < Bt.length; Pn++) {
                    const xr = Bt[Pn];
                    if (xr.selected) {
                      const Or = this._getOptionValue(xr.value);
                      re.push(Or);
                    }
                  }
                }
                (this.value = re), m(re);
              };
            }
            _registerOption(m) {
              const T = (this._idCounter++).toString();
              return this._optionMap.set(T, m), T;
            }
            _getOptionId(m) {
              for (const T of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(T)._value, m))
                  return T;
              return null;
            }
            _getOptionValue(m) {
              const T = (function Hr(C) {
                return C.split(":")[0];
              })(m);
              return this._optionMap.has(T) ? this._optionMap.get(T)._value : m;
            }
          }
          return (
            (C.ɵfac = (function () {
              let y;
              return function (T) {
                return (y || (y = f.n5z(C)))(T || C);
              };
            })()),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["select", "multiple", "", "formControlName", ""],
                ["select", "multiple", "", "formControl", ""],
                ["select", "multiple", "", "ngModel", ""],
              ],
              hostBindings: function (m, T) {
                1 & m &&
                  f.NdJ("change", function (Ve) {
                    return T.onChange(Ve.target);
                  })("blur", function () {
                    return T.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [f._Bn([uo]), f.qOj],
            })),
            C
          );
        })(),
        nn = (() => {
          class C {
            constructor(m, T, re) {
              (this._element = m),
                (this._renderer = T),
                (this._select = re),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(m) {
              null != this._select &&
                ((this._value = m),
                this._setElementValue(Io(this.id, m)),
                this._select.writeValue(this._select.value));
            }
            set value(m) {
              this._select
                ? ((this._value = m),
                  this._setElementValue(Io(this.id, m)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(m);
            }
            _setElementValue(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                m
              );
            }
            _setSelected(m) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "selected",
                m
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)(f.Y36(f.SBq), f.Y36(f.Qsj), f.Y36(co, 9));
            }),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            C
          );
        })(),
        Bn = (() => {
          class C {
            constructor() {
              this._validator = ze;
            }
            ngOnChanges(m) {
              if (this.inputName in m) {
                const T = this.normalizeInput(m[this.inputName].currentValue);
                (this._enabled = this.enabled(T)),
                  (this._validator = this._enabled
                    ? this.createValidator(T)
                    : ze),
                  this._onChange && this._onChange();
              }
            }
            validate(m) {
              return this._validator(m);
            }
            registerOnValidatorChange(m) {
              this._onChange = m;
            }
            enabled(m) {
              return null != m;
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵdir = f.lG2({ type: C, features: [f.TTD] })),
            C
          );
        })();
      const $r = { provide: ne, useExisting: (0, f.Gpc)(() => rn), multi: !0 };
      let rn = (() => {
        class C extends Bn {
          constructor() {
            super(...arguments),
              (this.inputName = "required"),
              (this.normalizeInput = f.D6c),
              (this.createValidator = (m) => z);
          }
          enabled(m) {
            return m;
          }
        }
        return (
          (C.ɵfac = (function () {
            let y;
            return function (T) {
              return (y || (y = f.n5z(C)))(T || C);
            };
          })()),
          (C.ɵdir = f.lG2({
            type: C,
            selectors: [
              [
                "",
                "required",
                "",
                "formControlName",
                "",
                3,
                "type",
                "checkbox",
              ],
              ["", "required", "", "formControl", "", 3, "type", "checkbox"],
              ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
            ],
            hostVars: 1,
            hostBindings: function (m, T) {
              2 & m && f.uIk("required", T._enabled ? "" : null);
            },
            inputs: { required: "required" },
            features: [f._Bn([$r]), f.qOj],
          })),
          C
        );
      })();
      const tr = { provide: ne, useExisting: (0, f.Gpc)(() => lr), multi: !0 };
      let lr = (() => {
          class C extends Bn {
            constructor() {
              super(...arguments),
                (this.inputName = "pattern"),
                (this.normalizeInput = (m) => m),
                (this.createValidator = (m) => zt(m));
            }
          }
          return (
            (C.ɵfac = (function () {
              let y;
              return function (T) {
                return (y || (y = f.n5z(C)))(T || C);
              };
            })()),
            (C.ɵdir = f.lG2({
              type: C,
              selectors: [
                ["", "pattern", "", "formControlName", ""],
                ["", "pattern", "", "formControl", ""],
                ["", "pattern", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (m, T) {
                2 & m && f.uIk("pattern", T._enabled ? T.pattern : null);
              },
              inputs: { pattern: "pattern" },
              features: [f._Bn([tr]), f.qOj],
            })),
            C
          );
        })(),
        Po = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = f.oAB({ type: C })),
            (C.ɵinj = f.cJS({ imports: [ei] })),
            C
          );
        })(),
        Wr = (() => {
          class C {}
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = f.oAB({ type: C })),
            (C.ɵinj = f.cJS({ imports: [Po] })),
            C
          );
        })(),
        ii = (() => {
          class C {
            static withConfig(m) {
              return {
                ngModule: C,
                providers: [
                  { provide: To, useValue: m.warnOnNgModelWithFormControl },
                ],
              };
            }
          }
          return (
            (C.ɵfac = function (m) {
              return new (m || C)();
            }),
            (C.ɵmod = f.oAB({ type: C })),
            (C.ɵinj = f.cJS({ imports: [Po] })),
            C
          );
        })();
    },
    1481: (Ze, me, x) => {
      x.d(me, { Dx: () => pe, b2: () => Rt, q6: () => Xt });
      var f = x(6895),
        w = x(8256);
      class Z extends f.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class X extends Z {
        static makeCurrent() {
          (0, f.HT)(new X());
        }
        onAndCancel(B, F, J) {
          return (
            B.addEventListener(F, J, !1),
            () => {
              B.removeEventListener(F, J, !1);
            }
          );
        }
        dispatchEvent(B, F) {
          B.dispatchEvent(F);
        }
        remove(B) {
          B.parentNode && B.parentNode.removeChild(B);
        }
        createElement(B, F) {
          return (F = F || this.getDefaultDocument()).createElement(B);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(B) {
          return B.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(B) {
          return B instanceof DocumentFragment;
        }
        getGlobalEventTarget(B, F) {
          return "window" === F
            ? window
            : "document" === F
            ? B
            : "body" === F
            ? B.body
            : null;
        }
        getBaseHref(B) {
          const F = (function we() {
            return (
              (c = c || document.querySelector("base")),
              c ? c.getAttribute("href") : null
            );
          })();
          return null == F
            ? null
            : (function Q(q) {
                (_e = _e || document.createElement("a")),
                  _e.setAttribute("href", q);
                const B = _e.pathname;
                return "/" === B.charAt(0) ? B : `/${B}`;
              })(F);
        }
        resetBaseElement() {
          c = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(B) {
          return (0, f.Mx)(document.cookie, B);
        }
      }
      let _e,
        c = null;
      const se = new w.OlP("TRANSITION_ID"),
        G = [
          {
            provide: w.ip1,
            useFactory: function ie(q, B, F) {
              return () => {
                F.get(w.CZH).donePromise.then(() => {
                  const J = (0, f.q)(),
                    ue = B.querySelectorAll(`style[ng-transition="${q}"]`);
                  for (let $e = 0; $e < ue.length; $e++) J.remove(ue[$e]);
                });
              };
            },
            deps: [se, f.K0, w.zs3],
            multi: !0,
          },
        ];
      let Ae = (() => {
        class q {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (q.ɵfac = function (F) {
            return new (F || q)();
          }),
          (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
          q
        );
      })();
      const le = new w.OlP("EventManagerPlugins");
      let Oe = (() => {
        class q {
          constructor(F, J) {
            (this._zone = J),
              (this._eventNameToPlugin = new Map()),
              F.forEach((ue) => (ue.manager = this)),
              (this._plugins = F.slice().reverse());
          }
          addEventListener(F, J, ue) {
            return this._findPluginFor(J).addEventListener(F, J, ue);
          }
          addGlobalEventListener(F, J, ue) {
            return this._findPluginFor(J).addGlobalEventListener(F, J, ue);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(F) {
            const J = this._eventNameToPlugin.get(F);
            if (J) return J;
            const ue = this._plugins;
            for (let $e = 0; $e < ue.length; $e++) {
              const We = ue[$e];
              if (We.supports(F)) return this._eventNameToPlugin.set(F, We), We;
            }
            throw new Error(`No event manager plugin found for event ${F}`);
          }
        }
        return (
          (q.ɵfac = function (F) {
            return new (F || q)(w.LFG(le), w.LFG(w.R0b));
          }),
          (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
          q
        );
      })();
      class Re {
        constructor(B) {
          this._doc = B;
        }
        addGlobalEventListener(B, F, J) {
          const ue = (0, f.q)().getGlobalEventTarget(this._doc, B);
          if (!ue)
            throw new Error(`Unsupported event target ${ue} for event ${F}`);
          return this.addEventListener(ue, F, J);
        }
      }
      let Ue = (() => {
          class q {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(F) {
              const J = new Set();
              F.forEach((ue) => {
                this._stylesSet.has(ue) || (this._stylesSet.add(ue), J.add(ue));
              }),
                this.onStylesAdded(J);
            }
            onStylesAdded(F) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (q.ɵfac = function (F) {
              return new (F || q)();
            }),
            (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
            q
          );
        })(),
        je = (() => {
          class q extends Ue {
            constructor(F) {
              super(),
                (this._doc = F),
                (this._hostNodes = new Map()),
                this._hostNodes.set(F.head, []);
            }
            _addStylesToHost(F, J, ue) {
              F.forEach(($e) => {
                const We = this._doc.createElement("style");
                (We.textContent = $e), ue.push(J.appendChild(We));
              });
            }
            addHost(F) {
              const J = [];
              this._addStylesToHost(this._stylesSet, F, J),
                this._hostNodes.set(F, J);
            }
            removeHost(F) {
              const J = this._hostNodes.get(F);
              J && J.forEach(ht), this._hostNodes.delete(F);
            }
            onStylesAdded(F) {
              this._hostNodes.forEach((J, ue) => {
                this._addStylesToHost(F, ue, J);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((F) => F.forEach(ht));
            }
          }
          return (
            (q.ɵfac = function (F) {
              return new (F || q)(w.LFG(f.K0));
            }),
            (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
            q
          );
        })();
      function ht(q) {
        (0, f.q)().remove(q);
      }
      const ce = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        De = /%COMP%/g,
        K = "%COMP%",
        Ee = `_nghost-${K}`,
        ne = `_ngcontent-${K}`;
      function j(q, B, F) {
        for (let J = 0; J < B.length; J++) {
          let ue = B[J];
          Array.isArray(ue)
            ? j(q, ue, F)
            : ((ue = ue.replace(De, q)), F.push(ue));
        }
        return F;
      }
      function W(q) {
        return (B) => {
          if ("__ngUnwrap__" === B) return q;
          !1 === q(B) && (B.preventDefault(), (B.returnValue = !1));
        };
      }
      let z = (() => {
        class q {
          constructor(F, J, ue) {
            (this.eventManager = F),
              (this.sharedStylesHost = J),
              (this.appId = ue),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Te(F));
          }
          createRenderer(F, J) {
            if (!F || !J) return this.defaultRenderer;
            switch (J.encapsulation) {
              case w.ifc.Emulated: {
                let ue = this.rendererByCompId.get(J.id);
                return (
                  ue ||
                    ((ue = new zt(
                      this.eventManager,
                      this.sharedStylesHost,
                      J,
                      this.appId
                    )),
                    this.rendererByCompId.set(J.id, ue)),
                  ue.applyToHost(F),
                  ue
                );
              }
              case 1:
              case w.ifc.ShadowDom:
                return new ze(this.eventManager, this.sharedStylesHost, F, J);
              default:
                if (!this.rendererByCompId.has(J.id)) {
                  const ue = j(J.id, J.styles, []);
                  this.sharedStylesHost.addStyles(ue),
                    this.rendererByCompId.set(J.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (q.ɵfac = function (F) {
            return new (F || q)(w.LFG(Oe), w.LFG(je), w.LFG(w.AFp));
          }),
          (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
          q
        );
      })();
      class Te {
        constructor(B) {
          (this.eventManager = B),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(B, F) {
          return F
            ? document.createElementNS(ce[F] || F, B)
            : document.createElement(B);
        }
        createComment(B) {
          return document.createComment(B);
        }
        createText(B) {
          return document.createTextNode(B);
        }
        appendChild(B, F) {
          (qe(B) ? B.content : B).appendChild(F);
        }
        insertBefore(B, F, J) {
          B && (qe(B) ? B.content : B).insertBefore(F, J);
        }
        removeChild(B, F) {
          B && B.removeChild(F);
        }
        selectRootElement(B, F) {
          let J = "string" == typeof B ? document.querySelector(B) : B;
          if (!J)
            throw new Error(`The selector "${B}" did not match any elements`);
          return F || (J.textContent = ""), J;
        }
        parentNode(B) {
          return B.parentNode;
        }
        nextSibling(B) {
          return B.nextSibling;
        }
        setAttribute(B, F, J, ue) {
          if (ue) {
            F = ue + ":" + F;
            const $e = ce[ue];
            $e ? B.setAttributeNS($e, F, J) : B.setAttribute(F, J);
          } else B.setAttribute(F, J);
        }
        removeAttribute(B, F, J) {
          if (J) {
            const ue = ce[J];
            ue ? B.removeAttributeNS(ue, F) : B.removeAttribute(`${J}:${F}`);
          } else B.removeAttribute(F);
        }
        addClass(B, F) {
          B.classList.add(F);
        }
        removeClass(B, F) {
          B.classList.remove(F);
        }
        setStyle(B, F, J, ue) {
          ue & (w.JOm.DashCase | w.JOm.Important)
            ? B.style.setProperty(F, J, ue & w.JOm.Important ? "important" : "")
            : (B.style[F] = J);
        }
        removeStyle(B, F, J) {
          J & w.JOm.DashCase ? B.style.removeProperty(F) : (B.style[F] = "");
        }
        setProperty(B, F, J) {
          B[F] = J;
        }
        setValue(B, F) {
          B.nodeValue = F;
        }
        listen(B, F, J) {
          return "string" == typeof B
            ? this.eventManager.addGlobalEventListener(B, F, W(J))
            : this.eventManager.addEventListener(B, F, W(J));
        }
      }
      function qe(q) {
        return "TEMPLATE" === q.tagName && void 0 !== q.content;
      }
      class zt extends Te {
        constructor(B, F, J, ue) {
          super(B), (this.component = J);
          const $e = j(ue + "-" + J.id, J.styles, []);
          F.addStyles($e),
            (this.contentAttr = (function ae(q) {
              return ne.replace(De, q);
            })(ue + "-" + J.id)),
            (this.hostAttr = (function Pe(q) {
              return Ee.replace(De, q);
            })(ue + "-" + J.id));
        }
        applyToHost(B) {
          super.setAttribute(B, this.hostAttr, "");
        }
        createElement(B, F) {
          const J = super.createElement(B, F);
          return super.setAttribute(J, this.contentAttr, ""), J;
        }
      }
      class ze extends Te {
        constructor(B, F, J, ue) {
          super(B),
            (this.sharedStylesHost = F),
            (this.hostEl = J),
            (this.shadowRoot = J.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const $e = j(ue.id, ue.styles, []);
          for (let We = 0; We < $e.length; We++) {
            const lt = document.createElement("style");
            (lt.textContent = $e[We]), this.shadowRoot.appendChild(lt);
          }
        }
        nodeOrShadowRoot(B) {
          return B === this.hostEl ? this.shadowRoot : B;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(B, F) {
          return super.appendChild(this.nodeOrShadowRoot(B), F);
        }
        insertBefore(B, F, J) {
          return super.insertBefore(this.nodeOrShadowRoot(B), F, J);
        }
        removeChild(B, F) {
          return super.removeChild(this.nodeOrShadowRoot(B), F);
        }
        parentNode(B) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(B))
          );
        }
      }
      let dt = (() => {
        class q extends Re {
          constructor(F) {
            super(F);
          }
          supports(F) {
            return !0;
          }
          addEventListener(F, J, ue) {
            return (
              F.addEventListener(J, ue, !1),
              () => this.removeEventListener(F, J, ue)
            );
          }
          removeEventListener(F, J, ue) {
            return F.removeEventListener(J, ue);
          }
        }
        return (
          (q.ɵfac = function (F) {
            return new (F || q)(w.LFG(f.K0));
          }),
          (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
          q
        );
      })();
      const qt = ["alt", "control", "meta", "shift"],
        yt = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Jt = {
          alt: (q) => q.altKey,
          control: (q) => q.ctrlKey,
          meta: (q) => q.metaKey,
          shift: (q) => q.shiftKey,
        };
      let Nt = (() => {
        class q extends Re {
          constructor(F) {
            super(F);
          }
          supports(F) {
            return null != q.parseEventName(F);
          }
          addEventListener(F, J, ue) {
            const $e = q.parseEventName(J),
              We = q.eventCallback($e.fullKey, ue, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, f.q)().onAndCancel(F, $e.domEventName, We)
              );
          }
          static parseEventName(F) {
            const J = F.toLowerCase().split("."),
              ue = J.shift();
            if (0 === J.length || ("keydown" !== ue && "keyup" !== ue))
              return null;
            const $e = q._normalizeKey(J.pop());
            let We = "",
              lt = J.indexOf("code");
            if (
              (lt > -1 && (J.splice(lt, 1), (We = "code.")),
              qt.forEach((Ye) => {
                const wt = J.indexOf(Ye);
                wt > -1 && (J.splice(wt, 1), (We += Ye + "."));
              }),
              (We += $e),
              0 != J.length || 0 === $e.length)
            )
              return null;
            const Se = {};
            return (Se.domEventName = ue), (Se.fullKey = We), Se;
          }
          static matchEventFullKeyCode(F, J) {
            let ue = yt[F.key] || F.key,
              $e = "";
            return (
              J.indexOf("code.") > -1 && ((ue = F.code), ($e = "code.")),
              !(null == ue || !ue) &&
                ((ue = ue.toLowerCase()),
                " " === ue ? (ue = "space") : "." === ue && (ue = "dot"),
                qt.forEach((We) => {
                  We !== ue && (0, Jt[We])(F) && ($e += We + ".");
                }),
                ($e += ue),
                $e === J)
            );
          }
          static eventCallback(F, J, ue) {
            return ($e) => {
              q.matchEventFullKeyCode($e, F) && ue.runGuarded(() => J($e));
            };
          }
          static _normalizeKey(F) {
            return "esc" === F ? "escape" : F;
          }
        }
        return (
          (q.ɵfac = function (F) {
            return new (F || q)(w.LFG(f.K0));
          }),
          (q.ɵprov = w.Yz7({ token: q, factory: q.ɵfac })),
          q
        );
      })();
      const Xt = (0, w.eFA)(w._c5, "browser", [
          { provide: w.Lbi, useValue: f.bD },
          {
            provide: w.g9A,
            useValue: function Sn() {
              X.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: f.K0,
            useFactory: function An() {
              return (0, w.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Tn = new w.OlP(""),
        Be = [
          {
            provide: w.rWj,
            useClass: class he {
              addToWindow(B) {
                (w.dqk.getAngularTestability = (J, ue = !0) => {
                  const $e = B.findTestabilityInTree(J, ue);
                  if (null == $e)
                    throw new Error("Could not find testability for element.");
                  return $e;
                }),
                  (w.dqk.getAllAngularTestabilities = () =>
                    B.getAllTestabilities()),
                  (w.dqk.getAllAngularRootElements = () =>
                    B.getAllRootElements()),
                  w.dqk.frameworkStabilizers ||
                    (w.dqk.frameworkStabilizers = []),
                  w.dqk.frameworkStabilizers.push((J) => {
                    const ue = w.dqk.getAllAngularTestabilities();
                    let $e = ue.length,
                      We = !1;
                    const lt = function (Se) {
                      (We = We || Se), $e--, 0 == $e && J(We);
                    };
                    ue.forEach(function (Se) {
                      Se.whenStable(lt);
                    });
                  });
              }
              findTestabilityInTree(B, F, J) {
                return null == F
                  ? null
                  : B.getTestability(F) ??
                      (J
                        ? (0, f.q)().isShadowRoot(F)
                          ? this.findTestabilityInTree(B, F.host, !0)
                          : this.findTestabilityInTree(B, F.parentElement, !0)
                        : null);
              }
            },
            deps: [],
          },
          { provide: w.lri, useClass: w.dDg, deps: [w.R0b, w.eoX, w.rWj] },
          { provide: w.dDg, useClass: w.dDg, deps: [w.R0b, w.eoX, w.rWj] },
        ],
        an = [
          { provide: w.zSh, useValue: "root" },
          {
            provide: w.qLn,
            useFactory: function Mt() {
              return new w.qLn();
            },
            deps: [],
          },
          { provide: le, useClass: dt, multi: !0, deps: [f.K0, w.R0b, w.Lbi] },
          { provide: le, useClass: Nt, multi: !0, deps: [f.K0] },
          { provide: z, useClass: z, deps: [Oe, je, w.AFp] },
          { provide: w.FYo, useExisting: z },
          { provide: Ue, useExisting: je },
          { provide: je, useClass: je, deps: [f.K0] },
          { provide: Oe, useClass: Oe, deps: [le, w.R0b] },
          { provide: f.JF, useClass: Ae, deps: [] },
          [],
        ];
      let Rt = (() => {
          class q {
            constructor(F) {}
            static withServerTransition(F) {
              return {
                ngModule: q,
                providers: [
                  { provide: w.AFp, useValue: F.appId },
                  { provide: se, useExisting: w.AFp },
                  G,
                ],
              };
            }
          }
          return (
            (q.ɵfac = function (F) {
              return new (F || q)(w.LFG(Tn, 12));
            }),
            (q.ɵmod = w.oAB({ type: q })),
            (q.ɵinj = w.cJS({
              providers: [...an, ...Be],
              imports: [f.ez, w.hGG],
            })),
            q
          );
        })(),
        pe = (() => {
          class q {
            constructor(F) {
              this._doc = F;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(F) {
              this._doc.title = F || "";
            }
          }
          return (
            (q.ɵfac = function (F) {
              return new (F || q)(w.LFG(f.K0));
            }),
            (q.ɵprov = w.Yz7({
              token: q,
              factory: function (F) {
                let J = null;
                return (
                  (J = F
                    ? new F()
                    : (function kt() {
                        return new pe((0, w.LFG)(f.K0));
                      })()),
                  J
                );
              },
              providedIn: "root",
            })),
            q
          );
        })();
      typeof window < "u" && window;
    },
    3841: (Ze, me, x) => {
      x.d(me, {
        gz: () => er,
        F0: () => on,
        rH: () => $i,
        Od: () => Gi,
        yS: () => gi,
        Bz: () => Un,
        lC: () => $r,
      });
      var f = x(8256),
        w = x(2076),
        Z = x(9646),
        X = x(1135);
      const we = (0, x(3888).d)(
        (l) =>
          function () {
            l(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var _e = x(9751),
        Q = x(4742),
        se = x(4671),
        ie = x(3268),
        G = x(7669),
        he = x(1810),
        Ae = x(5403),
        le = x(9672);
      function Oe(...l) {
        const u = (0, G.yG)(l),
          s = (0, G.jO)(l),
          { args: h, keys: v } = (0, Q.D)(l);
        if (0 === h.length) return (0, w.D)([], u);
        const M = new _e.y(
          (function Re(l, u, s = se.y) {
            return (h) => {
              Ue(
                u,
                () => {
                  const { length: v } = l,
                    M = new Array(v);
                  let P = v,
                    R = v;
                  for (let ee = 0; ee < v; ee++)
                    Ue(
                      u,
                      () => {
                        const Ie = (0, w.D)(l[ee], u);
                        let Xe = !1;
                        Ie.subscribe(
                          (0, Ae.x)(
                            h,
                            (Fe) => {
                              (M[ee] = Fe),
                                Xe || ((Xe = !0), R--),
                                R || h.next(s(M.slice()));
                            },
                            () => {
                              --P || h.complete();
                            }
                          )
                        );
                      },
                      h
                    );
                },
                h
              );
            };
          })(h, u, v ? (P) => (0, he.n)(v, P) : se.y)
        );
        return s ? M.pipe((0, ie.Z)(s)) : M;
      }
      function Ue(l, u, s) {
        l ? (0, le.f)(s, l, u) : u();
      }
      var je = x(8189);
      function ce(...l) {
        return (function ht() {
          return (0, je.J)(1);
        })()((0, w.D)(l, (0, G.yG)(l)));
      }
      var De = x(8421);
      function H(l) {
        return new _e.y((u) => {
          (0, De.Xf)(l()).subscribe(u);
        });
      }
      var K = x(9635),
        Ee = x(576);
      function ne(l, u) {
        const s = (0, Ee.m)(l) ? l : () => l,
          h = (v) => v.error(s());
        return new _e.y(u ? (v) => u.schedule(h, 0, v) : h);
      }
      var ae = x(515),
        Pe = x(727),
        j = x(4482);
      function W() {
        return (0, j.e)((l, u) => {
          let s = null;
          l._refCount++;
          const h = (0, Ae.x)(u, void 0, void 0, void 0, () => {
            if (!l || l._refCount <= 0 || 0 < --l._refCount)
              return void (s = null);
            const v = l._connection,
              M = s;
            (s = null),
              v && (!M || v === M) && v.unsubscribe(),
              u.unsubscribe();
          });
          l.subscribe(h), h.closed || (s = l.connect());
        });
      }
      class oe extends _e.y {
        constructor(u, s) {
          super(),
            (this.source = u),
            (this.subjectFactory = s),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, j.A)(u) && (this.lift = u.lift);
        }
        _subscribe(u) {
          return this.getSubject().subscribe(u);
        }
        getSubject() {
          const u = this._subject;
          return (
            (!u || u.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: u } = this;
          (this._subject = this._connection = null), u?.unsubscribe();
        }
        connect() {
          let u = this._connection;
          if (!u) {
            u = this._connection = new Pe.w0();
            const s = this.getSubject();
            u.add(
              this.source.subscribe(
                (0, Ae.x)(
                  s,
                  void 0,
                  () => {
                    this._teardown(), s.complete();
                  },
                  (h) => {
                    this._teardown(), s.error(h);
                  },
                  () => this._teardown()
                )
              )
            ),
              u.closed && ((this._connection = null), (u = Pe.w0.EMPTY));
          }
          return u;
        }
        refCount() {
          return W()(this);
        }
      }
      var z = x(7579),
        Te = x(6895),
        fe = x(4004);
      function He(l, u) {
        return (0, j.e)((s, h) => {
          let v = null,
            M = 0,
            P = !1;
          const R = () => P && !v && h.complete();
          s.subscribe(
            (0, Ae.x)(
              h,
              (ee) => {
                v?.unsubscribe();
                let Ie = 0;
                const Xe = M++;
                (0, De.Xf)(l(ee, Xe)).subscribe(
                  (v = (0, Ae.x)(
                    h,
                    (Fe) => h.next(u ? u(ee, Fe, Xe, Ie++) : Fe),
                    () => {
                      (v = null), R();
                    }
                  ))
                );
              },
              () => {
                (P = !0), R();
              }
            )
          );
        });
      }
      var qe = x(5698),
        ze = x(9300),
        dt = x(5577);
      function qt(l) {
        return (0, j.e)((u, s) => {
          let h = !1;
          u.subscribe(
            (0, Ae.x)(
              s,
              (v) => {
                (h = !0), s.next(v);
              },
              () => {
                h || s.next(l), s.complete();
              }
            )
          );
        });
      }
      function yt(l = Jt) {
        return (0, j.e)((u, s) => {
          let h = !1;
          u.subscribe(
            (0, Ae.x)(
              s,
              (v) => {
                (h = !0), s.next(v);
              },
              () => (h ? s.complete() : s.error(l()))
            )
          );
        });
      }
      function Jt() {
        return new we();
      }
      function Nt(l, u) {
        const s = arguments.length >= 2;
        return (h) =>
          h.pipe(
            l ? (0, ze.h)((v, M) => l(v, M, h)) : se.y,
            (0, qe.q)(1),
            s ? qt(u) : yt(() => new we())
          );
      }
      var Ct = x(4351),
        ut = x(8505);
      function tt(l) {
        return (0, j.e)((u, s) => {
          let M,
            h = null,
            v = !1;
          (h = u.subscribe(
            (0, Ae.x)(s, void 0, void 0, (P) => {
              (M = (0, De.Xf)(l(P, tt(l)(u)))),
                h ? (h.unsubscribe(), (h = null), M.subscribe(s)) : (v = !0);
            })
          )),
            v && (h.unsubscribe(), (h = null), M.subscribe(s));
        });
      }
      function $n(l, u, s, h, v) {
        return (M, P) => {
          let R = s,
            ee = u,
            Ie = 0;
          M.subscribe(
            (0, Ae.x)(
              P,
              (Xe) => {
                const Fe = Ie++;
                (ee = R ? l(ee, Xe, Fe) : ((R = !0), Xe)), h && P.next(ee);
              },
              v &&
                (() => {
                  R && P.next(ee), P.complete();
                })
            )
          );
        };
      }
      function Gn(l, u) {
        return (0, j.e)($n(l, u, arguments.length >= 2, !0));
      }
      function Sn(l) {
        return l <= 0
          ? () => ae.E
          : (0, j.e)((u, s) => {
              let h = [];
              u.subscribe(
                (0, Ae.x)(
                  s,
                  (v) => {
                    h.push(v), l < h.length && h.shift();
                  },
                  () => {
                    for (const v of h) s.next(v);
                    s.complete();
                  },
                  void 0,
                  () => {
                    h = null;
                  }
                )
              );
            });
      }
      function Mt(l, u) {
        const s = arguments.length >= 2;
        return (h) =>
          h.pipe(
            l ? (0, ze.h)((v, M) => l(v, M, h)) : se.y,
            Sn(1),
            s ? qt(u) : yt(() => new we())
          );
      }
      function Xt(l) {
        return (0, j.e)((u, s) => {
          try {
            u.subscribe(s);
          } finally {
            s.add(l);
          }
        });
      }
      var Tn = x(1481);
      const Be = "primary",
        an = Symbol("RouteTitle");
      class Rt {
        constructor(u) {
          this.params = u || {};
        }
        has(u) {
          return Object.prototype.hasOwnProperty.call(this.params, u);
        }
        get(u) {
          if (this.has(u)) {
            const s = this.params[u];
            return Array.isArray(s) ? s[0] : s;
          }
          return null;
        }
        getAll(u) {
          if (this.has(u)) {
            const s = this.params[u];
            return Array.isArray(s) ? s : [s];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Ut(l) {
        return new Rt(l);
      }
      function _n(l, u, s) {
        const h = s.path.split("/");
        if (
          h.length > l.length ||
          ("full" === s.pathMatch && (u.hasChildren() || h.length < l.length))
        )
          return null;
        const v = {};
        for (let M = 0; M < h.length; M++) {
          const P = h[M],
            R = l[M];
          if (P.startsWith(":")) v[P.substring(1)] = R;
          else if (P !== R.path) return null;
        }
        return { consumed: l.slice(0, h.length), posParams: v };
      }
      function kt(l, u) {
        const s = l ? Object.keys(l) : void 0,
          h = u ? Object.keys(u) : void 0;
        if (!s || !h || s.length != h.length) return !1;
        let v;
        for (let M = 0; M < s.length; M++)
          if (((v = s[M]), !pe(l[v], u[v]))) return !1;
        return !0;
      }
      function pe(l, u) {
        if (Array.isArray(l) && Array.isArray(u)) {
          if (l.length !== u.length) return !1;
          const s = [...l].sort(),
            h = [...u].sort();
          return s.every((v, M) => h[M] === v);
        }
        return l === u;
      }
      function N(l) {
        return Array.prototype.concat.apply([], l);
      }
      function E(l) {
        return l.length > 0 ? l[l.length - 1] : null;
      }
      function I(l, u) {
        for (const s in l) l.hasOwnProperty(s) && u(l[s], s);
      }
      function k(l) {
        return (0, f.CqO)(l)
          ? l
          : (0, f.QGY)(l)
          ? (0, w.D)(Promise.resolve(l))
          : (0, Z.of)(l);
      }
      const Y = !1,
        Me = {
          exact: function Le(l, u, s) {
            if (
              !Ft(l.segments, u.segments) ||
              !nt(l.segments, u.segments, s) ||
              l.numberOfChildren !== u.numberOfChildren
            )
              return !1;
            for (const h in u.children)
              if (!l.children[h] || !Le(l.children[h], u.children[h], s))
                return !1;
            return !0;
          },
          subset: Dt,
        },
        pt = {
          exact: function Zt(l, u) {
            return kt(l, u);
          },
          subset: function Ot(l, u) {
            return (
              Object.keys(u).length <= Object.keys(l).length &&
              Object.keys(u).every((s) => pe(l[s], u[s]))
            );
          },
          ignored: () => !0,
        };
      function gt(l, u, s) {
        return (
          Me[s.paths](l.root, u.root, s.matrixParams) &&
          pt[s.queryParams](l.queryParams, u.queryParams) &&
          !("exact" === s.fragment && l.fragment !== u.fragment)
        );
      }
      function Dt(l, u, s) {
        return Kt(l, u, u.segments, s);
      }
      function Kt(l, u, s, h) {
        if (l.segments.length > s.length) {
          const v = l.segments.slice(0, s.length);
          return !(!Ft(v, s) || u.hasChildren() || !nt(v, s, h));
        }
        if (l.segments.length === s.length) {
          if (!Ft(l.segments, s) || !nt(l.segments, s, h)) return !1;
          for (const v in u.children)
            if (!l.children[v] || !Dt(l.children[v], u.children[v], h))
              return !1;
          return !0;
        }
        {
          const v = s.slice(0, l.segments.length),
            M = s.slice(l.segments.length);
          return (
            !!(Ft(l.segments, v) && nt(l.segments, v, h) && l.children[Be]) &&
            Kt(l.children[Be], u, M, h)
          );
        }
      }
      function nt(l, u, s) {
        return u.every((h, v) => pt[s](l[v].parameters, h.parameters));
      }
      class St {
        constructor(u, s, h) {
          (this.root = u), (this.queryParams = s), (this.fragment = h);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Ut(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return ro.serialize(this);
        }
      }
      class Je {
        constructor(u, s) {
          (this.segments = u),
            (this.children = s),
            (this.parent = null),
            I(s, (h, v) => (h.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Wn(this);
        }
      }
      class ln {
        constructor(u, s) {
          (this.path = u), (this.parameters = s);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Ut(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return J(this);
        }
      }
      function Ft(l, u) {
        return l.length === u.length && l.every((s, h) => s.path === u[h].path);
      }
      let zn = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = f.Yz7({
            token: l,
            factory: function () {
              return new Zn();
            },
            providedIn: "root",
          })),
          l
        );
      })();
      class Zn {
        parse(u) {
          const s = new In(u);
          return new St(
            s.parseRootSegment(),
            s.parseQueryParams(),
            s.parseFragment()
          );
        }
        serialize(u) {
          const s = `/${Yn(u.root, !0)}`,
            h = (function $e(l) {
              const u = Object.keys(l)
                .map((s) => {
                  const h = l[s];
                  return Array.isArray(h)
                    ? h.map((v) => `${sr(s)}=${sr(v)}`).join("&")
                    : `${sr(s)}=${sr(h)}`;
                })
                .filter((s) => !!s);
              return u.length ? `?${u.join("&")}` : "";
            })(u.queryParams);
          return `${s}${h}${
            "string" == typeof u.fragment
              ? `#${(function Dr(l) {
                  return encodeURI(l);
                })(u.fragment)}`
              : ""
          }`;
        }
      }
      const ro = new Zn();
      function Wn(l) {
        return l.segments.map((u) => J(u)).join("/");
      }
      function Yn(l, u) {
        if (!l.hasChildren()) return Wn(l);
        if (u) {
          const s = l.children[Be] ? Yn(l.children[Be], !1) : "",
            h = [];
          return (
            I(l.children, (v, M) => {
              M !== Be && h.push(`${M}:${Yn(v, !1)}`);
            }),
            h.length > 0 ? `${s}(${h.join("//")})` : s
          );
        }
        {
          const s = (function vn(l, u) {
            let s = [];
            return (
              I(l.children, (h, v) => {
                v === Be && (s = s.concat(u(h, v)));
              }),
              I(l.children, (h, v) => {
                v !== Be && (s = s.concat(u(h, v)));
              }),
              s
            );
          })(l, (h, v) =>
            v === Be ? [Yn(l.children[Be], !1)] : [`${v}:${Yn(h, !1)}`]
          );
          return 1 === Object.keys(l.children).length && null != l.children[Be]
            ? `${Wn(l)}/${s[0]}`
            : `${Wn(l)}/(${s.join("//")})`;
        }
      }
      function kn(l) {
        return encodeURIComponent(l)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function sr(l) {
        return kn(l).replace(/%3B/gi, ";");
      }
      function q(l) {
        return kn(l)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function B(l) {
        return decodeURIComponent(l);
      }
      function F(l) {
        return B(l.replace(/\+/g, "%20"));
      }
      function J(l) {
        return `${q(l.path)}${(function ue(l) {
          return Object.keys(l)
            .map((u) => `;${q(u)}=${q(l[u])}`)
            .join("");
        })(l.parameters)}`;
      }
      const We = /^[^\/()?;=#]+/;
      function lt(l) {
        const u = l.match(We);
        return u ? u[0] : "";
      }
      const Se = /^[^=?&#]+/,
        wt = /^[^&#]+/;
      class In {
        constructor(u) {
          (this.url = u), (this.remaining = u);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Je([], {})
              : new Je([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const u = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(u);
            } while (this.consumeOptional("&"));
          return u;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const u = [];
          for (
            this.peekStartsWith("(") || u.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), u.push(this.parseSegment());
          let s = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (s = this.parseParens(!0)));
          let h = {};
          return (
            this.peekStartsWith("(") && (h = this.parseParens(!1)),
            (u.length > 0 || Object.keys(s).length > 0) &&
              (h[Be] = new Je(u, s)),
            h
          );
        }
        parseSegment() {
          const u = lt(this.remaining);
          if ("" === u && this.peekStartsWith(";")) throw new f.vHH(4009, Y);
          return this.capture(u), new ln(B(u), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const u = {};
          for (; this.consumeOptional(";"); ) this.parseParam(u);
          return u;
        }
        parseParam(u) {
          const s = lt(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = "";
          if (this.consumeOptional("=")) {
            const v = lt(this.remaining);
            v && ((h = v), this.capture(h));
          }
          u[B(s)] = B(h);
        }
        parseQueryParam(u) {
          const s = (function Ye(l) {
            const u = l.match(Se);
            return u ? u[0] : "";
          })(this.remaining);
          if (!s) return;
          this.capture(s);
          let h = "";
          if (this.consumeOptional("=")) {
            const P = (function Wt(l) {
              const u = l.match(wt);
              return u ? u[0] : "";
            })(this.remaining);
            P && ((h = P), this.capture(h));
          }
          const v = F(s),
            M = F(h);
          if (u.hasOwnProperty(v)) {
            let P = u[v];
            Array.isArray(P) || ((P = [P]), (u[v] = P)), P.push(M);
          } else u[v] = M;
        }
        parseParens(u) {
          const s = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const h = lt(this.remaining),
              v = this.remaining[h.length];
            if ("/" !== v && ")" !== v && ";" !== v) throw new f.vHH(4010, Y);
            let M;
            h.indexOf(":") > -1
              ? ((M = h.slice(0, h.indexOf(":"))),
                this.capture(M),
                this.capture(":"))
              : u && (M = Be);
            const P = this.parseChildren();
            (s[M] = 1 === Object.keys(P).length ? P[Be] : new Je([], P)),
              this.consumeOptional("//");
          }
          return s;
        }
        peekStartsWith(u) {
          return this.remaining.startsWith(u);
        }
        consumeOptional(u) {
          return (
            !!this.peekStartsWith(u) &&
            ((this.remaining = this.remaining.substring(u.length)), !0)
          );
        }
        capture(u) {
          if (!this.consumeOptional(u)) throw new f.vHH(4011, Y);
        }
      }
      function Lt(l) {
        return l.segments.length > 0 ? new Je([], { [Be]: l }) : l;
      }
      function xn(l) {
        const u = {};
        for (const h of Object.keys(l.children)) {
          const M = xn(l.children[h]);
          (M.segments.length > 0 || M.hasChildren()) && (u[h] = M);
        }
        return (function At(l) {
          if (1 === l.numberOfChildren && l.children[Be]) {
            const u = l.children[Be];
            return new Je(l.segments.concat(u.segments), u.children);
          }
          return l;
        })(new Je(l.segments, u));
      }
      function fn(l) {
        return l instanceof St;
      }
      function wr(l, u, s, h, v) {
        if (0 === s.length) return yn(u.root, u.root, u.root, h, v);
        const M = (function Jn(l) {
          if ("string" == typeof l[0] && 1 === l.length && "/" === l[0])
            return new en(!0, 0, l);
          let u = 0,
            s = !1;
          const h = l.reduce((v, M, P) => {
            if ("object" == typeof M && null != M) {
              if (M.outlets) {
                const R = {};
                return (
                  I(M.outlets, (ee, Ie) => {
                    R[Ie] = "string" == typeof ee ? ee.split("/") : ee;
                  }),
                  [...v, { outlets: R }]
                );
              }
              if (M.segmentPath) return [...v, M.segmentPath];
            }
            return "string" != typeof M
              ? [...v, M]
              : 0 === P
              ? (M.split("/").forEach((R, ee) => {
                  (0 == ee && "." === R) ||
                    (0 == ee && "" === R
                      ? (s = !0)
                      : ".." === R
                      ? u++
                      : "" != R && v.push(R));
                }),
                v)
              : [...v, M];
          }, []);
          return new en(s, u, h);
        })(s);
        return M.toRoot()
          ? yn(u.root, u.root, new Je([], {}), h, v)
          : (function P(ee) {
              const Ie = (function br(l, u, s, h) {
                  if (l.isAbsolute) return new fr(u.root, !0, 0);
                  if (-1 === h) return new fr(s, s === u.root, 0);
                  return (function hr(l, u, s) {
                    let h = l,
                      v = u,
                      M = s;
                    for (; M > v; ) {
                      if (((M -= v), (h = h.parent), !h))
                        throw new f.vHH(4005, !1);
                      v = h.segments.length;
                    }
                    return new fr(h, !1, v - M);
                  })(s, h + (On(l.commands[0]) ? 0 : 1), l.numberOfDoubleDots);
                })(M, u, l.snapshot?._urlSegment, ee),
                Xe = Ie.processChildren
                  ? Cn(Ie.segmentGroup, Ie.index, M.commands)
                  : Kn(Ie.segmentGroup, Ie.index, M.commands);
              return yn(u.root, Ie.segmentGroup, Xe, h, v);
            })(l.snapshot?._lastPathIndex);
      }
      function On(l) {
        return (
          "object" == typeof l && null != l && !l.outlets && !l.segmentPath
        );
      }
      function Pt(l) {
        return "object" == typeof l && null != l && l.outlets;
      }
      function yn(l, u, s, h, v) {
        let P,
          M = {};
        h &&
          I(h, (ee, Ie) => {
            M[Ie] = Array.isArray(ee) ? ee.map((Xe) => `${Xe}`) : `${ee}`;
          }),
          (P = l === u ? s : qn(l, u, s));
        const R = Lt(xn(P));
        return new St(R, M, v);
      }
      function qn(l, u, s) {
        const h = {};
        return (
          I(l.children, (v, M) => {
            h[M] = v === u ? s : qn(v, u, s);
          }),
          new Je(l.segments, h)
        );
      }
      class en {
        constructor(u, s, h) {
          if (
            ((this.isAbsolute = u),
            (this.numberOfDoubleDots = s),
            (this.commands = h),
            u && h.length > 0 && On(h[0]))
          )
            throw new f.vHH(4003, !1);
          const v = h.find(Pt);
          if (v && v !== E(h)) throw new f.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class fr {
        constructor(u, s, h) {
          (this.segmentGroup = u), (this.processChildren = s), (this.index = h);
        }
      }
      function Kn(l, u, s) {
        if (
          (l || (l = new Je([], {})),
          0 === l.segments.length && l.hasChildren())
        )
          return Cn(l, u, s);
        const h = (function oo(l, u, s) {
            let h = 0,
              v = u;
            const M = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; v < l.segments.length; ) {
              if (h >= s.length) return M;
              const P = l.segments[v],
                R = s[h];
              if (Pt(R)) break;
              const ee = `${R}`,
                Ie = h < s.length - 1 ? s[h + 1] : null;
              if (v > 0 && void 0 === ee) break;
              if (ee && Ie && "object" == typeof Ie && void 0 === Ie.outlets) {
                if (!tn(ee, Ie, P)) return M;
                h += 2;
              } else {
                if (!tn(ee, {}, P)) return M;
                h++;
              }
              v++;
            }
            return { match: !0, pathIndex: v, commandIndex: h };
          })(l, u, s),
          v = s.slice(h.commandIndex);
        if (h.match && h.pathIndex < l.segments.length) {
          const M = new Je(l.segments.slice(0, h.pathIndex), {});
          return (
            (M.children[Be] = new Je(
              l.segments.slice(h.pathIndex),
              l.children
            )),
            Cn(M, 0, v)
          );
        }
        return h.match && 0 === v.length
          ? new Je(l.segments, {})
          : h.match && !l.hasChildren()
          ? Qn(l, u, s)
          : h.match
          ? Cn(l, 0, v)
          : Qn(l, u, s);
      }
      function Cn(l, u, s) {
        if (0 === s.length) return new Je(l.segments, {});
        {
          const h = (function ar(l) {
              return Pt(l[0]) ? l[0].outlets : { [Be]: l };
            })(s),
            v = {};
          return (
            I(h, (M, P) => {
              "string" == typeof M && (M = [M]),
                null !== M && (v[P] = Kn(l.children[P], u, M));
            }),
            I(l.children, (M, P) => {
              void 0 === h[P] && (v[P] = M);
            }),
            new Je(l.segments, v)
          );
        }
      }
      function Qn(l, u, s) {
        const h = l.segments.slice(0, u);
        let v = 0;
        for (; v < s.length; ) {
          const M = s[v];
          if (Pt(M)) {
            const ee = Ht(M.outlets);
            return new Je(h, ee);
          }
          if (0 === v && On(s[0])) {
            h.push(new ln(l.segments[u].path, Ko(s[0]))), v++;
            continue;
          }
          const P = Pt(M) ? M.outlets[Be] : `${M}`,
            R = v < s.length - 1 ? s[v + 1] : null;
          P && R && On(R)
            ? (h.push(new ln(P, Ko(R))), (v += 2))
            : (h.push(new ln(P, {})), v++);
        }
        return new Je(h, {});
      }
      function Ht(l) {
        const u = {};
        return (
          I(l, (s, h) => {
            "string" == typeof s && (s = [s]),
              null !== s && (u[h] = Qn(new Je([], {}), 0, s));
          }),
          u
        );
      }
      function Ko(l) {
        const u = {};
        return I(l, (s, h) => (u[h] = `${s}`)), u;
      }
      function tn(l, u, s) {
        return l == s.path && kt(u, s.parameters);
      }
      class jt {
        constructor(u, s) {
          (this.id = u), (this.url = s);
        }
      }
      class io extends jt {
        constructor(u, s, h = "imperative", v = null) {
          super(u, s),
            (this.type = 0),
            (this.navigationTrigger = h),
            (this.restoredState = v);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Vt extends jt {
        constructor(u, s, h) {
          super(u, s), (this.urlAfterRedirects = h), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Xn extends jt {
        constructor(u, s, h, v) {
          super(u, s), (this.reason = h), (this.code = v), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class pn extends jt {
        constructor(u, s, h, v) {
          super(u, s), (this.error = h), (this.target = v), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Eo extends jt {
        constructor(u, s, h, v) {
          super(u, s),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Mo extends jt {
        constructor(u, s, h, v) {
          super(u, s),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class So extends jt {
        constructor(u, s, h, v, M) {
          super(u, s),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.shouldActivate = M),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Qo extends jt {
        constructor(u, s, h, v) {
          super(u, s),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Xo extends jt {
        constructor(u, s, h, v) {
          super(u, s),
            (this.urlAfterRedirects = h),
            (this.state = v),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ti {
        constructor(u) {
          (this.route = u), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class ys {
        constructor(u) {
          (this.route = u), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ei {
        constructor(u) {
          (this.snapshot = u), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ti {
        constructor(u) {
          (this.snapshot = u), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class ni {
        constructor(u) {
          (this.snapshot = u), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ii {
        constructor(u) {
          (this.snapshot = u), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Ao {
        constructor(u, s, h) {
          (this.routerEvent = u),
            (this.position = s),
            (this.anchor = h),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class ri {
        constructor(u) {
          this._root = u;
        }
        get root() {
          return this._root.value;
        }
        parent(u) {
          const s = this.pathFromRoot(u);
          return s.length > 1 ? s[s.length - 2] : null;
        }
        children(u) {
          const s = so(u, this._root);
          return s ? s.children.map((h) => h.value) : [];
        }
        firstChild(u) {
          const s = so(u, this._root);
          return s && s.children.length > 0 ? s.children[0].value : null;
        }
        siblings(u) {
          const s = ao(u, this._root);
          return s.length < 2
            ? []
            : s[s.length - 2].children
                .map((v) => v.value)
                .filter((v) => v !== u);
        }
        pathFromRoot(u) {
          return ao(u, this._root).map((s) => s.value);
        }
      }
      function so(l, u) {
        if (l === u.value) return u;
        for (const s of u.children) {
          const h = so(l, s);
          if (h) return h;
        }
        return null;
      }
      function ao(l, u) {
        if (l === u.value) return [u];
        for (const s of u.children) {
          const h = ao(l, s);
          if (h.length) return h.unshift(u), h;
        }
        return [];
      }
      class Dn {
        constructor(u, s) {
          (this.value = u), (this.children = s);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Er(l) {
        const u = {};
        return l && l.children.forEach((s) => (u[s.value.outlet] = s)), u;
      }
      class Mr extends ri {
        constructor(u, s) {
          super(u), (this.snapshot = s), Ur(this, u);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function pr(l, u) {
        const s = (function Br(l, u) {
            const P = new Sr([], {}, {}, "", {}, Be, u, null, l.root, -1, {});
            return new Ar("", new Dn(P, []));
          })(l, u),
          h = new X.X([new ln("", {})]),
          v = new X.X({}),
          M = new X.X({}),
          P = new X.X({}),
          R = new X.X(""),
          ee = new er(h, v, P, R, M, Be, u, s.root);
        return (ee.snapshot = s.root), new Mr(new Dn(ee, []), s);
      }
      class er {
        constructor(u, s, h, v, M, P, R, ee) {
          (this.url = u),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = v),
            (this.data = M),
            (this.outlet = P),
            (this.component = R),
            (this.title =
              this.data?.pipe((0, fe.U)((Ie) => Ie[an])) ?? (0, Z.of)(void 0)),
            (this._futureSnapshot = ee);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, fe.U)((u) => Ut(u)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, fe.U)((u) => Ut(u))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function xi(l, u = "emptyOnly") {
        const s = l.pathFromRoot;
        let h = 0;
        if ("always" !== u)
          for (h = s.length - 1; h >= 1; ) {
            const v = s[h],
              M = s[h - 1];
            if (v.routeConfig && "" === v.routeConfig.path) h--;
            else {
              if (M.component) break;
              h--;
            }
          }
        return (function Vn(l) {
          return l.reduce(
            (u, s) => ({
              params: { ...u.params, ...s.params },
              data: { ...u.data, ...s.data },
              resolve: {
                ...s.data,
                ...u.resolve,
                ...s.routeConfig?.data,
                ...s._resolvedData,
              },
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(s.slice(h));
      }
      class Sr {
        constructor(u, s, h, v, M, P, R, ee, Ie, Xe, Fe, It) {
          (this.url = u),
            (this.params = s),
            (this.queryParams = h),
            (this.fragment = v),
            (this.data = M),
            (this.outlet = P),
            (this.component = R),
            (this.title = this.data?.[an]),
            (this.routeConfig = ee),
            (this._urlSegment = Ie),
            (this._lastPathIndex = Xe),
            (this._correctedLastPathIndex = It ?? Xe),
            (this._resolve = Fe);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Ut(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Ut(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((h) => h.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Ar extends ri {
        constructor(u, s) {
          super(s), (this.url = u), Ur(this, s);
        }
        toString() {
          return Tr(this._root);
        }
      }
      function Ur(l, u) {
        (u.value._routerState = l), u.children.forEach((s) => Ur(l, s));
      }
      function Tr(l) {
        const u =
          l.children.length > 0 ? ` { ${l.children.map(Tr).join(", ")} } ` : "";
        return `${l.value}${u}`;
      }
      function lo(l) {
        if (l.snapshot) {
          const u = l.snapshot,
            s = l._futureSnapshot;
          (l.snapshot = s),
            kt(u.queryParams, s.queryParams) ||
              l.queryParams.next(s.queryParams),
            u.fragment !== s.fragment && l.fragment.next(s.fragment),
            kt(u.params, s.params) || l.params.next(s.params),
            (function ir(l, u) {
              if (l.length !== u.length) return !1;
              for (let s = 0; s < l.length; ++s) if (!kt(l[s], u[s])) return !1;
              return !0;
            })(u.url, s.url) || l.url.next(s.url),
            kt(u.data, s.data) || l.data.next(s.data);
        } else
          (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
      }
      function uo(l, u) {
        const s =
          kt(l.params, u.params) &&
          (function dn(l, u) {
            return (
              Ft(l, u) && l.every((s, h) => kt(s.parameters, u[h].parameters))
            );
          })(l.url, u.url);
        return (
          s &&
          !(!l.parent != !u.parent) &&
          (!l.parent || uo(l.parent, u.parent))
        );
      }
      function Hr(l, u, s) {
        if (s && l.shouldReuseRoute(u.value, s.value.snapshot)) {
          const h = s.value;
          h._futureSnapshot = u.value;
          const v = (function oi(l, u, s) {
            return u.children.map((h) => {
              for (const v of s.children)
                if (l.shouldReuseRoute(h.value, v.value.snapshot))
                  return Hr(l, h, v);
              return Hr(l, h);
            });
          })(l, u, s);
          return new Dn(h, v);
        }
        {
          if (l.shouldAttach(u.value)) {
            const M = l.retrieve(u.value);
            if (null !== M) {
              const P = M.route;
              return (
                (P.value._futureSnapshot = u.value),
                (P.children = u.children.map((R) => Hr(l, R))),
                P
              );
            }
          }
          const h = (function co(l) {
              return new er(
                new X.X(l.url),
                new X.X(l.params),
                new X.X(l.queryParams),
                new X.X(l.fragment),
                new X.X(l.data),
                l.outlet,
                l.component,
                l
              );
            })(u.value),
            v = u.children.map((M) => Hr(l, M));
          return new Dn(h, v);
        }
      }
      const nn = "ngNavigationCancelingError";
      function gr(l, u) {
        const { redirectTo: s, navigationBehaviorOptions: h } = fn(u)
            ? { redirectTo: u, navigationBehaviorOptions: void 0 }
            : u,
          v = fo(!1, 0, u);
        return (v.url = s), (v.navigationBehaviorOptions = h), v;
      }
      function fo(l, u, s) {
        const h = new Error("NavigationCancelingError: " + (l || ""));
        return (h[nn] = !0), (h.cancellationCode = u), s && (h.url = s), h;
      }
      function Bn(l) {
        return xo(l) && fn(l.url);
      }
      function xo(l) {
        return l && l[nn];
      }
      class Oi {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new ot()),
            (this.attachRef = null);
        }
      }
      let ot = (() => {
        class l {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(s, h) {
            const v = this.getOrCreateContext(s);
            (v.outlet = h), this.contexts.set(s, v);
          }
          onChildOutletDestroyed(s) {
            const h = this.getContext(s);
            h && ((h.outlet = null), (h.attachRef = null));
          }
          onOutletDeactivated() {
            const s = this.contexts;
            return (this.contexts = new Map()), s;
          }
          onOutletReAttached(s) {
            this.contexts = s;
          }
          getOrCreateContext(s) {
            let h = this.getContext(s);
            return h || ((h = new Oi()), this.contexts.set(s, h)), h;
          }
          getContext(s) {
            return this.contexts.get(s) || null;
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵprov = f.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const jr = !1;
      let $r = (() => {
        class l {
          constructor(s, h, v, M, P) {
            (this.parentContexts = s),
              (this.location = h),
              (this.changeDetector = M),
              (this.environmentInjector = P),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new f.vpe()),
              (this.deactivateEvents = new f.vpe()),
              (this.attachEvents = new f.vpe()),
              (this.detachEvents = new f.vpe()),
              (this.name = v || Be),
              s.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.getContext(this.name)?.outlet === this &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const s = this.parentContexts.getContext(this.name);
              s &&
                s.route &&
                (s.attachRef
                  ? this.attach(s.attachRef, s.route)
                  : this.activateWith(s.route, s.injector));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new f.vHH(4012, jr);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new f.vHH(4012, jr);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new f.vHH(4012, jr);
            this.location.detach();
            const s = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(s.instance),
              s
            );
          }
          attach(s, h) {
            (this.activated = s),
              (this._activatedRoute = h),
              this.location.insert(s.hostView),
              this.attachEvents.emit(s.instance);
          }
          deactivate() {
            if (this.activated) {
              const s = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(s);
            }
          }
          activateWith(s, h) {
            if (this.isActivated) throw new f.vHH(4013, jr);
            this._activatedRoute = s;
            const v = this.location,
              P = s._futureSnapshot.component,
              R = this.parentContexts.getOrCreateContext(this.name).children,
              ee = new ho(s, R, v.injector);
            if (
              h &&
              (function rn(l) {
                return !!l.resolveComponentFactory;
              })(h)
            ) {
              const Ie = h.resolveComponentFactory(P);
              this.activated = v.createComponent(Ie, v.length, ee);
            } else
              this.activated = v.createComponent(P, {
                index: v.length,
                injector: ee,
                environmentInjector: h ?? this.environmentInjector,
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(
              f.Y36(ot),
              f.Y36(f.s_b),
              f.$8M("name"),
              f.Y36(f.sBO),
              f.Y36(f.lqb)
            );
          }),
          (l.ɵdir = f.lG2({
            type: l,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
          })),
          l
        );
      })();
      class ho {
        constructor(u, s, h) {
          (this.route = u), (this.childContexts = s), (this.parent = h);
        }
        get(u, s) {
          return u === er
            ? this.route
            : u === ot
            ? this.childContexts
            : this.parent.get(u, s);
        }
      }
      let Gr = (() => {
        class l {}
        return (
          (l.ɵfac = function (s) {
            return new (s || l)();
          }),
          (l.ɵcmp = f.Xpm({
            type: l,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [f.jDz],
            decls: 1,
            vars: 0,
            template: function (s, h) {
              1 & s && f._UZ(0, "router-outlet");
            },
            dependencies: [$r],
            encapsulation: 2,
          })),
          l
        );
      })();
      function zr(l, u) {
        return (
          l.providers &&
            !l._injector &&
            (l._injector = (0, f.MMx)(l.providers, u, `Route: ${l.path}`)),
          l._injector ?? u
        );
      }
      function Ke(l) {
        const u = l.children && l.children.map(Ke),
          s = u ? { ...l, children: u } : { ...l };
        return (
          !s.component &&
            !s.loadComponent &&
            (u || s.loadChildren) &&
            s.outlet &&
            s.outlet !== Be &&
            (s.component = Gr),
          s
        );
      }
      function bn(l) {
        return l.outlet || Be;
      }
      function Po(l, u) {
        const s = l.filter((h) => bn(h) === u);
        return s.push(...l.filter((h) => bn(h) !== u)), s;
      }
      function Wr(l) {
        if (!l) return null;
        if (l.routeConfig?._injector) return l.routeConfig._injector;
        for (let u = l.parent; u; u = u.parent) {
          const s = u.routeConfig;
          if (s?._loadedInjector) return s._loadedInjector;
          if (s?._injector) return s._injector;
        }
        return null;
      }
      class Fi {
        constructor(u, s, h, v) {
          (this.routeReuseStrategy = u),
            (this.futureState = s),
            (this.currState = h),
            (this.forwardEvent = v);
        }
        activate(u) {
          const s = this.futureState._root,
            h = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(s, h, u),
            lo(this.futureState.root),
            this.activateChildRoutes(s, h, u);
        }
        deactivateChildRoutes(u, s, h) {
          const v = Er(s);
          u.children.forEach((M) => {
            const P = M.value.outlet;
            this.deactivateRoutes(M, v[P], h), delete v[P];
          }),
            I(v, (M, P) => {
              this.deactivateRouteAndItsChildren(M, h);
            });
        }
        deactivateRoutes(u, s, h) {
          const v = u.value,
            M = s ? s.value : null;
          if (v === M)
            if (v.component) {
              const P = h.getContext(v.outlet);
              P && this.deactivateChildRoutes(u, s, P.children);
            } else this.deactivateChildRoutes(u, s, h);
          else M && this.deactivateRouteAndItsChildren(s, h);
        }
        deactivateRouteAndItsChildren(u, s) {
          u.value.component &&
          this.routeReuseStrategy.shouldDetach(u.value.snapshot)
            ? this.detachAndStoreRouteSubtree(u, s)
            : this.deactivateRouteAndOutlet(u, s);
        }
        detachAndStoreRouteSubtree(u, s) {
          const h = s.getContext(u.value.outlet),
            v = h && u.value.component ? h.children : s,
            M = Er(u);
          for (const P of Object.keys(M))
            this.deactivateRouteAndItsChildren(M[P], v);
          if (h && h.outlet) {
            const P = h.outlet.detach(),
              R = h.children.onOutletDeactivated();
            this.routeReuseStrategy.store(u.value.snapshot, {
              componentRef: P,
              route: u,
              contexts: R,
            });
          }
        }
        deactivateRouteAndOutlet(u, s) {
          const h = s.getContext(u.value.outlet),
            v = h && u.value.component ? h.children : s,
            M = Er(u);
          for (const P of Object.keys(M))
            this.deactivateRouteAndItsChildren(M[P], v);
          h &&
            h.outlet &&
            (h.outlet.deactivate(),
            h.children.onOutletDeactivated(),
            (h.attachRef = null),
            (h.resolver = null),
            (h.route = null));
        }
        activateChildRoutes(u, s, h) {
          const v = Er(s);
          u.children.forEach((M) => {
            this.activateRoutes(M, v[M.value.outlet], h),
              this.forwardEvent(new Ii(M.value.snapshot));
          }),
            u.children.length && this.forwardEvent(new ti(u.value.snapshot));
        }
        activateRoutes(u, s, h) {
          const v = u.value,
            M = s ? s.value : null;
          if ((lo(v), v === M))
            if (v.component) {
              const P = h.getOrCreateContext(v.outlet);
              this.activateChildRoutes(u, s, P.children);
            } else this.activateChildRoutes(u, s, h);
          else if (v.component) {
            const P = h.getOrCreateContext(v.outlet);
            if (this.routeReuseStrategy.shouldAttach(v.snapshot)) {
              const R = this.routeReuseStrategy.retrieve(v.snapshot);
              this.routeReuseStrategy.store(v.snapshot, null),
                P.children.onOutletReAttached(R.contexts),
                (P.attachRef = R.componentRef),
                (P.route = R.route.value),
                P.outlet && P.outlet.attach(R.componentRef, R.route.value),
                lo(R.route.value),
                this.activateChildRoutes(u, null, P.children);
            } else {
              const R = Wr(v.snapshot),
                ee = R?.get(f._Vd) ?? null;
              (P.attachRef = null),
                (P.route = v),
                (P.resolver = ee),
                (P.injector = R),
                P.outlet && P.outlet.activateWith(v, P.injector),
                this.activateChildRoutes(u, null, P.children);
            }
          } else this.activateChildRoutes(u, null, h);
        }
      }
      class Fo {
        constructor(u) {
          (this.path = u), (this.route = this.path[this.path.length - 1]);
        }
      }
      class No {
        constructor(u, s) {
          (this.component = u), (this.route = s);
        }
      }
      function Ni(l, u, s) {
        const h = l._root;
        return mr(h, u ? u._root : null, s, [h.value]);
      }
      function st(l, u) {
        const s = Symbol(),
          h = u.get(l, s);
        return h === s
          ? "function" != typeof l || (0, f.Z0I)(l)
            ? u.get(l)
            : l
          : h;
      }
      function mr(
        l,
        u,
        s,
        h,
        v = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const M = Er(u);
        return (
          l.children.forEach((P) => {
            (function si(
              l,
              u,
              s,
              h,
              v = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const M = l.value,
                P = u ? u.value : null,
                R = s ? s.getContext(l.value.outlet) : null;
              if (P && M.routeConfig === P.routeConfig) {
                const ee = (function C(l, u, s) {
                  if ("function" == typeof s) return s(l, u);
                  switch (s) {
                    case "pathParamsChange":
                      return !Ft(l.url, u.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Ft(l.url, u.url) || !kt(l.queryParams, u.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !uo(l, u) || !kt(l.queryParams, u.queryParams);
                    default:
                      return !uo(l, u);
                  }
                })(P, M, M.routeConfig.runGuardsAndResolvers);
                ee
                  ? v.canActivateChecks.push(new Fo(h))
                  : ((M.data = P.data), (M._resolvedData = P._resolvedData)),
                  mr(l, u, M.component ? (R ? R.children : null) : s, h, v),
                  ee &&
                    R &&
                    R.outlet &&
                    R.outlet.isActivated &&
                    v.canDeactivateChecks.push(new No(R.outlet.component, P));
              } else
                P && y(u, R, v),
                  v.canActivateChecks.push(new Fo(h)),
                  mr(l, null, M.component ? (R ? R.children : null) : s, h, v);
            })(P, M[P.value.outlet], s, h.concat([P.value]), v),
              delete M[P.value.outlet];
          }),
          I(M, (P, R) => y(P, s.getContext(R), v)),
          v
        );
      }
      function y(l, u, s) {
        const h = Er(l),
          v = l.value;
        I(h, (M, P) => {
          y(M, v.component ? (u ? u.children.getContext(P) : null) : u, s);
        }),
          s.canDeactivateChecks.push(
            new No(
              v.component && u && u.outlet && u.outlet.isActivated
                ? u.outlet.component
                : null,
              v
            )
          );
      }
      function m(l) {
        return "function" == typeof l;
      }
      function gn(l) {
        return l instanceof we || "EmptyError" === l?.name;
      }
      const Pr = Symbol("INITIAL_VALUE");
      function nr() {
        return He((l) =>
          Oe(
            l.map((u) =>
              u.pipe(
                (0, qe.q)(1),
                (function zt(...l) {
                  const u = (0, G.yG)(l);
                  return (0, j.e)((s, h) => {
                    (u ? ce(l, s, u) : ce(l, s)).subscribe(h);
                  });
                })(Pr)
              )
            )
          ).pipe(
            (0, fe.U)((u) => {
              for (const s of u)
                if (!0 !== s) {
                  if (s === Pr) return Pr;
                  if (!1 === s || s instanceof St) return s;
                }
              return !0;
            }),
            (0, ze.h)((u) => u !== Pr),
            (0, qe.q)(1)
          )
        );
      }
      function _(l) {
        return (0, K.z)(
          (0, ut.b)((u) => {
            if (fn(u)) throw gr(0, u);
          }),
          (0, fe.U)((u) => !0 === u)
        );
      }
      const L = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function te(l, u, s, h, v) {
        const M = ge(l, u, s);
        return M.matched
          ? (function A(l, u, s, h) {
              const v = u.canMatch;
              if (!v || 0 === v.length) return (0, Z.of)(!0);
              const M = v.map((P) => {
                const R = st(P, l);
                return k(
                  (function xr(l) {
                    return l && m(l.canMatch);
                  })(R)
                    ? R.canMatch(u, s)
                    : l.runInContext(() => R(u, s))
                );
              });
              return (0, Z.of)(M).pipe(nr(), _());
            })((h = zr(u, h)), u, s).pipe(
              (0, fe.U)((P) => (!0 === P ? M : { ...L }))
            )
          : (0, Z.of)(M);
      }
      function ge(l, u, s) {
        if ("" === u.path)
          return "full" === u.pathMatch && (l.hasChildren() || s.length > 0)
            ? { ...L }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: s,
                parameters: {},
                positionalParamSegments: {},
              };
        const v = (u.matcher || _n)(s, l, u);
        if (!v) return { ...L };
        const M = {};
        I(v.posParams, (R, ee) => {
          M[ee] = R.path;
        });
        const P =
          v.consumed.length > 0
            ? { ...M, ...v.consumed[v.consumed.length - 1].parameters }
            : M;
        return {
          matched: !0,
          consumedSegments: v.consumed,
          remainingSegments: s.slice(v.consumed.length),
          parameters: P,
          positionalParamSegments: v.posParams ?? {},
        };
      }
      function Ne(l, u, s, h, v = "corrected") {
        if (
          s.length > 0 &&
          (function Et(l, u, s) {
            return s.some((h) => ct(l, u, h) && bn(h) !== Be);
          })(l, s, h)
        ) {
          const P = new Je(
            u,
            (function _t(l, u, s, h) {
              const v = {};
              (v[Be] = h),
                (h._sourceSegment = l),
                (h._segmentIndexShift = u.length);
              for (const M of s)
                if ("" === M.path && bn(M) !== Be) {
                  const P = new Je([], {});
                  (P._sourceSegment = l),
                    (P._segmentIndexShift = u.length),
                    (v[bn(M)] = P);
                }
              return v;
            })(l, u, h, new Je(s, l.children))
          );
          return (
            (P._sourceSegment = l),
            (P._segmentIndexShift = u.length),
            { segmentGroup: P, slicedSegments: [] }
          );
        }
        if (
          0 === s.length &&
          (function ft(l, u, s) {
            return s.some((h) => ct(l, u, h));
          })(l, s, h)
        ) {
          const P = new Je(
            l.segments,
            (function vt(l, u, s, h, v, M) {
              const P = {};
              for (const R of h)
                if (ct(l, s, R) && !v[bn(R)]) {
                  const ee = new Je([], {});
                  (ee._sourceSegment = l),
                    (ee._segmentIndexShift =
                      "legacy" === M ? l.segments.length : u.length),
                    (P[bn(R)] = ee);
                }
              return { ...v, ...P };
            })(l, u, s, h, l.children, v)
          );
          return (
            (P._sourceSegment = l),
            (P._segmentIndexShift = u.length),
            { segmentGroup: P, slicedSegments: s }
          );
        }
        const M = new Je(l.segments, l.children);
        return (
          (M._sourceSegment = l),
          (M._segmentIndexShift = u.length),
          { segmentGroup: M, slicedSegments: s }
        );
      }
      function ct(l, u, s) {
        return (
          (!(l.hasChildren() || u.length > 0) || "full" !== s.pathMatch) &&
          "" === s.path
        );
      }
      function mt(l, u, s, h) {
        return (
          !!(bn(l) === h || (h !== Be && ct(u, s, l))) &&
          ("**" === l.path || ge(u, l, s).matched)
        );
      }
      function at(l, u, s) {
        return 0 === u.length && !l.children[s];
      }
      const rr = !1;
      class En {
        constructor(u) {
          this.segmentGroup = u || null;
        }
      }
      class _r {
        constructor(u) {
          this.urlTree = u;
        }
      }
      function Fn(l) {
        return ne(new En(l));
      }
      function go(l) {
        return ne(new _r(l));
      }
      class Vi {
        constructor(u, s, h, v, M) {
          (this.injector = u),
            (this.configLoader = s),
            (this.urlSerializer = h),
            (this.urlTree = v),
            (this.config = M),
            (this.allowRedirects = !0);
        }
        apply() {
          const u = Ne(this.urlTree.root, [], [], this.config).segmentGroup,
            s = new Je(u.segments, u.children);
          return this.expandSegmentGroup(this.injector, this.config, s, Be)
            .pipe(
              (0, fe.U)((M) =>
                this.createUrlTree(
                  xn(M),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              tt((M) => {
                if (M instanceof _r)
                  return (this.allowRedirects = !1), this.match(M.urlTree);
                throw M instanceof En ? this.noMatchError(M) : M;
              })
            );
        }
        match(u) {
          return this.expandSegmentGroup(this.injector, this.config, u.root, Be)
            .pipe(
              (0, fe.U)((v) =>
                this.createUrlTree(xn(v), u.queryParams, u.fragment)
              )
            )
            .pipe(
              tt((v) => {
                throw v instanceof En ? this.noMatchError(v) : v;
              })
            );
        }
        noMatchError(u) {
          return new f.vHH(4002, rr);
        }
        createUrlTree(u, s, h) {
          const v = Lt(u);
          return new St(v, s, h);
        }
        expandSegmentGroup(u, s, h, v) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.expandChildren(u, s, h).pipe((0, fe.U)((M) => new Je([], M)))
            : this.expandSegment(u, h, s, h.segments, v, !0);
        }
        expandChildren(u, s, h) {
          const v = [];
          for (const M of Object.keys(h.children))
            "primary" === M ? v.unshift(M) : v.push(M);
          return (0, w.D)(v).pipe(
            (0, Ct.b)((M) => {
              const P = h.children[M],
                R = Po(s, M);
              return this.expandSegmentGroup(u, R, P, M).pipe(
                (0, fe.U)((ee) => ({ segment: ee, outlet: M }))
              );
            }),
            Gn((M, P) => ((M[P.outlet] = P.segment), M), {}),
            Mt()
          );
        }
        expandSegment(u, s, h, v, M, P) {
          return (0, w.D)(h).pipe(
            (0, Ct.b)((R) =>
              this.expandSegmentAgainstRoute(u, s, h, R, v, M, P).pipe(
                tt((Ie) => {
                  if (Ie instanceof En) return (0, Z.of)(null);
                  throw Ie;
                })
              )
            ),
            Nt((R) => !!R),
            tt((R, ee) => {
              if (gn(R)) return at(s, v, M) ? (0, Z.of)(new Je([], {})) : Fn(s);
              throw R;
            })
          );
        }
        expandSegmentAgainstRoute(u, s, h, v, M, P, R) {
          return mt(v, s, M, P)
            ? void 0 === v.redirectTo
              ? this.matchSegmentAgainstRoute(u, s, v, M, P)
              : R && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(u, s, h, v, M, P)
              : Fn(s)
            : Fn(s);
        }
        expandSegmentAgainstRouteUsingRedirect(u, s, h, v, M, P) {
          return "**" === v.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(u, h, v, P)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                u,
                s,
                h,
                v,
                M,
                P
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(u, s, h, v) {
          const M = this.applyRedirectCommands([], h.redirectTo, {});
          return h.redirectTo.startsWith("/")
            ? go(M)
            : this.lineralizeSegments(h, M).pipe(
                (0, dt.z)((P) => {
                  const R = new Je(P, {});
                  return this.expandSegment(u, R, s, P, v, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(u, s, h, v, M, P) {
          const {
            matched: R,
            consumedSegments: ee,
            remainingSegments: Ie,
            positionalParamSegments: Xe,
          } = ge(s, v, M);
          if (!R) return Fn(s);
          const Fe = this.applyRedirectCommands(ee, v.redirectTo, Xe);
          return v.redirectTo.startsWith("/")
            ? go(Fe)
            : this.lineralizeSegments(v, Fe).pipe(
                (0, dt.z)((It) =>
                  this.expandSegment(u, s, h, It.concat(Ie), P, !1)
                )
              );
        }
        matchSegmentAgainstRoute(u, s, h, v, M) {
          return "**" === h.path
            ? ((u = zr(h, u)),
              h.loadChildren
                ? (h._loadedRoutes
                    ? (0, Z.of)({
                        routes: h._loadedRoutes,
                        injector: h._loadedInjector,
                      })
                    : this.configLoader.loadChildren(u, h)
                  ).pipe(
                    (0, fe.U)(
                      (R) => (
                        (h._loadedRoutes = R.routes),
                        (h._loadedInjector = R.injector),
                        new Je(v, {})
                      )
                    )
                  )
                : (0, Z.of)(new Je(v, {})))
            : te(s, h, v, u).pipe(
                He(
                  ({
                    matched: P,
                    consumedSegments: R,
                    remainingSegments: ee,
                  }) =>
                    P
                      ? this.getChildConfig((u = h._injector ?? u), h, v).pipe(
                          (0, dt.z)((Xe) => {
                            const Fe = Xe.injector ?? u,
                              It = Xe.routes,
                              { segmentGroup: mn, slicedSegments: or } = Ne(
                                s,
                                R,
                                ee,
                                It
                              ),
                              Zo = new Je(mn.segments, mn.children);
                            if (0 === or.length && Zo.hasChildren())
                              return this.expandChildren(Fe, It, Zo).pipe(
                                (0, fe.U)((Al) => new Je(R, Al))
                              );
                            if (0 === It.length && 0 === or.length)
                              return (0, Z.of)(new Je(R, {}));
                            const Mn = bn(h) === M;
                            return this.expandSegment(
                              Fe,
                              Zo,
                              It,
                              or,
                              Mn ? Be : M,
                              !0
                            ).pipe(
                              (0, fe.U)(
                                (Jr) =>
                                  new Je(R.concat(Jr.segments), Jr.children)
                              )
                            );
                          })
                        )
                      : Fn(s)
                )
              );
        }
        getChildConfig(u, s, h) {
          return s.children
            ? (0, Z.of)({ routes: s.children, injector: u })
            : s.loadChildren
            ? void 0 !== s._loadedRoutes
              ? (0, Z.of)({
                  routes: s._loadedRoutes,
                  injector: s._loadedInjector,
                })
              : (function b(l, u, s, h) {
                  const v = u.canLoad;
                  if (void 0 === v || 0 === v.length) return (0, Z.of)(!0);
                  const M = v.map((P) => {
                    const R = st(P, l);
                    return k(
                      (function re(l) {
                        return l && m(l.canLoad);
                      })(R)
                        ? R.canLoad(u, s)
                        : l.runInContext(() => R(u, s))
                    );
                  });
                  return (0, Z.of)(M).pipe(nr(), _());
                })(u, s, h).pipe(
                  (0, dt.z)((v) =>
                    v
                      ? this.configLoader.loadChildren(u, s).pipe(
                          (0, ut.b)((M) => {
                            (s._loadedRoutes = M.routes),
                              (s._loadedInjector = M.injector);
                          })
                        )
                      : (function mo(l) {
                          return ne(fo(rr, 3));
                        })()
                  )
                )
            : (0, Z.of)({ routes: [], injector: u });
        }
        lineralizeSegments(u, s) {
          let h = [],
            v = s.root;
          for (;;) {
            if (((h = h.concat(v.segments)), 0 === v.numberOfChildren))
              return (0, Z.of)(h);
            if (v.numberOfChildren > 1 || !v.children[Be])
              return ne(new f.vHH(4e3, rr));
            v = v.children[Be];
          }
        }
        applyRedirectCommands(u, s, h) {
          return this.applyRedirectCreateUrlTree(
            s,
            this.urlSerializer.parse(s),
            u,
            h
          );
        }
        applyRedirectCreateUrlTree(u, s, h, v) {
          const M = this.createSegmentGroup(u, s.root, h, v);
          return new St(
            M,
            this.createQueryParams(s.queryParams, this.urlTree.queryParams),
            s.fragment
          );
        }
        createQueryParams(u, s) {
          const h = {};
          return (
            I(u, (v, M) => {
              if ("string" == typeof v && v.startsWith(":")) {
                const R = v.substring(1);
                h[M] = s[R];
              } else h[M] = v;
            }),
            h
          );
        }
        createSegmentGroup(u, s, h, v) {
          const M = this.createSegments(u, s.segments, h, v);
          let P = {};
          return (
            I(s.children, (R, ee) => {
              P[ee] = this.createSegmentGroup(u, R, h, v);
            }),
            new Je(M, P)
          );
        }
        createSegments(u, s, h, v) {
          return s.map((M) =>
            M.path.startsWith(":")
              ? this.findPosParam(u, M, v)
              : this.findOrReturn(M, h)
          );
        }
        findPosParam(u, s, h) {
          const v = h[s.path.substring(1)];
          if (!v) throw new f.vHH(4001, rr);
          return v;
        }
        findOrReturn(u, s) {
          let h = 0;
          for (const v of s) {
            if (v.path === u.path) return s.splice(h), v;
            h++;
          }
          return u;
        }
      }
      class ll {}
      class ul {
        constructor(u, s, h, v, M, P, R, ee) {
          (this.injector = u),
            (this.rootComponentType = s),
            (this.config = h),
            (this.urlTree = v),
            (this.url = M),
            (this.paramsInheritanceStrategy = P),
            (this.relativeLinkResolution = R),
            (this.urlSerializer = ee);
        }
        recognize() {
          const u = Ne(
            this.urlTree.root,
            [],
            [],
            this.config.filter((s) => void 0 === s.redirectTo),
            this.relativeLinkResolution
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            u,
            Be
          ).pipe(
            (0, fe.U)((s) => {
              if (null === s) return null;
              const h = new Sr(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Be,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                v = new Dn(h, s),
                M = new Ar(this.url, v);
              return this.inheritParamsAndData(M._root), M;
            })
          );
        }
        inheritParamsAndData(u) {
          const s = u.value,
            h = xi(s, this.paramsInheritanceStrategy);
          (s.params = Object.freeze(h.params)),
            (s.data = Object.freeze(h.data)),
            u.children.forEach((v) => this.inheritParamsAndData(v));
        }
        processSegmentGroup(u, s, h, v) {
          return 0 === h.segments.length && h.hasChildren()
            ? this.processChildren(u, s, h)
            : this.processSegment(u, s, h, h.segments, v);
        }
        processChildren(u, s, h) {
          return (0, w.D)(Object.keys(h.children)).pipe(
            (0, Ct.b)((v) => {
              const M = h.children[v],
                P = Po(s, v);
              return this.processSegmentGroup(u, P, M, v);
            }),
            Gn((v, M) => (v && M ? (v.push(...M), v) : null)),
            (function An(l, u = !1) {
              return (0, j.e)((s, h) => {
                let v = 0;
                s.subscribe(
                  (0, Ae.x)(h, (M) => {
                    const P = l(M, v++);
                    (P || u) && h.next(M), !P && h.complete();
                  })
                );
              });
            })((v) => null !== v),
            qt(null),
            Mt(),
            (0, fe.U)((v) => {
              if (null === v) return null;
              const M = sa(v);
              return (
                (function cl(l) {
                  l.sort((u, s) =>
                    u.value.outlet === Be
                      ? -1
                      : s.value.outlet === Be
                      ? 1
                      : u.value.outlet.localeCompare(s.value.outlet)
                  );
                })(M),
                M
              );
            })
          );
        }
        processSegment(u, s, h, v, M) {
          return (0, w.D)(s).pipe(
            (0, Ct.b)((P) =>
              this.processSegmentAgainstRoute(P._injector ?? u, P, h, v, M)
            ),
            Nt((P) => !!P),
            tt((P) => {
              if (gn(P)) return at(h, v, M) ? (0, Z.of)([]) : (0, Z.of)(null);
              throw P;
            })
          );
        }
        processSegmentAgainstRoute(u, s, h, v, M) {
          if (s.redirectTo || !mt(s, h, v, M)) return (0, Z.of)(null);
          let P;
          if ("**" === s.path) {
            const R = v.length > 0 ? E(v).parameters : {},
              ee = hl(h) + v.length,
              Ie = new Sr(
                v,
                R,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                Es(s),
                bn(s),
                s.component ?? s._loadedComponent ?? null,
                s,
                fl(h),
                ee,
                Ms(s),
                ee
              );
            P = (0, Z.of)({
              snapshot: Ie,
              consumedSegments: [],
              remainingSegments: [],
            });
          } else
            P = te(h, s, v, u).pipe(
              (0, fe.U)(
                ({
                  matched: R,
                  consumedSegments: ee,
                  remainingSegments: Ie,
                  parameters: Xe,
                }) => {
                  if (!R) return null;
                  const Fe = hl(h) + ee.length;
                  return {
                    snapshot: new Sr(
                      ee,
                      Xe,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      Es(s),
                      bn(s),
                      s.component ?? s._loadedComponent ?? null,
                      s,
                      fl(h),
                      Fe,
                      Ms(s),
                      Fe
                    ),
                    consumedSegments: ee,
                    remainingSegments: Ie,
                  };
                }
              )
            );
          return P.pipe(
            He((R) => {
              if (null === R) return (0, Z.of)(null);
              const {
                snapshot: ee,
                consumedSegments: Ie,
                remainingSegments: Xe,
              } = R;
              u = s._injector ?? u;
              const Fe = s._loadedInjector ?? u,
                It = (function ci(l) {
                  return l.children
                    ? l.children
                    : l.loadChildren
                    ? l._loadedRoutes
                    : [];
                })(s),
                { segmentGroup: mn, slicedSegments: or } = Ne(
                  h,
                  Ie,
                  Xe,
                  It.filter((Mn) => void 0 === Mn.redirectTo),
                  this.relativeLinkResolution
                );
              if (0 === or.length && mn.hasChildren())
                return this.processChildren(Fe, It, mn).pipe(
                  (0, fe.U)((Mn) => (null === Mn ? null : [new Dn(ee, Mn)]))
                );
              if (0 === It.length && 0 === or.length)
                return (0, Z.of)([new Dn(ee, [])]);
              const Zo = bn(s) === M;
              return this.processSegment(Fe, It, mn, or, Zo ? Be : M).pipe(
                (0, fe.U)((Mn) => (null === Mn ? null : [new Dn(ee, Mn)]))
              );
            })
          );
        }
      }
      function bs(l) {
        const u = l.value.routeConfig;
        return u && "" === u.path && void 0 === u.redirectTo;
      }
      function sa(l) {
        const u = [],
          s = new Set();
        for (const h of l) {
          if (!bs(h)) {
            u.push(h);
            continue;
          }
          const v = u.find((M) => h.value.routeConfig === M.value.routeConfig);
          void 0 !== v ? (v.children.push(...h.children), s.add(v)) : u.push(h);
        }
        for (const h of s) {
          const v = sa(h.children);
          u.push(new Dn(h.value, v));
        }
        return u.filter((h) => !s.has(h));
      }
      function fl(l) {
        let u = l;
        for (; u._sourceSegment; ) u = u._sourceSegment;
        return u;
      }
      function hl(l) {
        let u = l,
          s = u._segmentIndexShift ?? 0;
        for (; u._sourceSegment; )
          (u = u._sourceSegment), (s += u._segmentIndexShift ?? 0);
        return s - 1;
      }
      function Es(l) {
        return l.data || {};
      }
      function Ms(l) {
        return l.resolve || {};
      }
      function Ui(l) {
        return "string" == typeof l.title || null === l.title;
      }
      function Lo(l) {
        return He((u) => {
          const s = l(u);
          return s ? (0, w.D)(s).pipe((0, fe.U)(() => u)) : (0, Z.of)(u);
        });
      }
      let gl = (() => {
          class l {
            buildTitle(s) {
              let h,
                v = s.root;
              for (; void 0 !== v; )
                (h = this.getResolvedTitleForRoute(v) ?? h),
                  (v = v.children.find((M) => M.outlet === Be));
              return h;
            }
            getResolvedTitleForRoute(s) {
              return s.data[an];
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)();
            }),
            (l.ɵprov = f.Yz7({
              token: l,
              factory: function () {
                return (0, f.f3M)(Ss);
              },
              providedIn: "root",
            })),
            l
          );
        })(),
        Ss = (() => {
          class l extends gl {
            constructor(s) {
              super(), (this.title = s);
            }
            updateTitle(s) {
              const h = this.buildTitle(s);
              void 0 !== h && this.title.setTitle(h);
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(f.LFG(Tn.Dx));
            }),
            (l.ɵprov = f.Yz7({
              token: l,
              factory: l.ɵfac,
              providedIn: "root",
            })),
            l
          );
        })();
      class _l {}
      class vl extends class vr {
        shouldDetach(u) {
          return !1;
        }
        store(u, s) {}
        shouldAttach(u) {
          return !1;
        }
        retrieve(u) {
          return null;
        }
        shouldReuseRoute(u, s) {
          return u.routeConfig === s.routeConfig;
        }
      } {}
      const Vo = new f.OlP("", { providedIn: "root", factory: () => ({}) }),
        Bo = new f.OlP("ROUTES");
      let Uo = (() => {
        class l {
          constructor(s, h) {
            (this.injector = s),
              (this.compiler = h),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(s) {
            if (this.componentLoaders.get(s))
              return this.componentLoaders.get(s);
            if (s._loadedComponent) return (0, Z.of)(s._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(s);
            const h = k(s.loadComponent()).pipe(
                (0, ut.b)((M) => {
                  this.onLoadEndListener && this.onLoadEndListener(s),
                    (s._loadedComponent = M);
                }),
                Xt(() => {
                  this.componentLoaders.delete(s);
                })
              ),
              v = new oe(h, () => new z.x()).pipe(W());
            return this.componentLoaders.set(s, v), v;
          }
          loadChildren(s, h) {
            if (this.childrenLoaders.get(h)) return this.childrenLoaders.get(h);
            if (h._loadedRoutes)
              return (0, Z.of)({
                routes: h._loadedRoutes,
                injector: h._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(h);
            const M = this.loadModuleFactoryOrRoutes(h.loadChildren).pipe(
                (0, fe.U)((R) => {
                  this.onLoadEndListener && this.onLoadEndListener(h);
                  let ee,
                    Ie,
                    Xe = !1;
                  Array.isArray(R)
                    ? (Ie = R)
                    : ((ee = R.create(s).injector),
                      (Ie = N(ee.get(Bo, [], f.XFs.Self | f.XFs.Optional))));
                  return { routes: Ie.map(Ke), injector: ee };
                }),
                Xt(() => {
                  this.childrenLoaders.delete(h);
                })
              ),
              P = new oe(M, () => new z.x()).pipe(W());
            return this.childrenLoaders.set(h, P), P;
          }
          loadModuleFactoryOrRoutes(s) {
            return k(s()).pipe(
              (0, dt.z)((h) =>
                h instanceof f.YKP || Array.isArray(h)
                  ? (0, Z.of)(h)
                  : (0, w.D)(this.compiler.compileModuleAsync(h))
              )
            );
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(f.LFG(f.zs3), f.LFG(f.Sil));
          }),
          (l.ɵprov = f.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      class yl {}
      class ua {
        shouldProcessUrl(u) {
          return !0;
        }
        extract(u) {
          return u;
        }
        merge(u, s) {
          return u;
        }
      }
      function ca(l) {
        throw l;
      }
      function da(l, u, s) {
        return u.parse("/");
      }
      const Cl = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        ji = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      function fa() {
        const l = (0, f.f3M)(zn),
          u = (0, f.f3M)(ot),
          s = (0, f.f3M)(Te.Ye),
          h = (0, f.f3M)(f.zs3),
          v = (0, f.f3M)(f.Sil),
          M = (0, f.f3M)(Bo, { optional: !0 }) ?? [],
          P = (0, f.f3M)(Vo, { optional: !0 }) ?? {},
          R = (0, f.f3M)(Ss),
          ee = (0, f.f3M)(gl, { optional: !0 }),
          Ie = (0, f.f3M)(yl, { optional: !0 }),
          Xe = (0, f.f3M)(_l, { optional: !0 }),
          Fe = new on(null, l, u, s, h, v, N(M));
        return (
          Ie && (Fe.urlHandlingStrategy = Ie),
          Xe && (Fe.routeReuseStrategy = Xe),
          (Fe.titleStrategy = ee ?? R),
          (function pi(l, u) {
            l.errorHandler && (u.errorHandler = l.errorHandler),
              l.malformedUriErrorHandler &&
                (u.malformedUriErrorHandler = l.malformedUriErrorHandler),
              l.onSameUrlNavigation &&
                (u.onSameUrlNavigation = l.onSameUrlNavigation),
              l.paramsInheritanceStrategy &&
                (u.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
              l.relativeLinkResolution &&
                (u.relativeLinkResolution = l.relativeLinkResolution),
              l.urlUpdateStrategy &&
                (u.urlUpdateStrategy = l.urlUpdateStrategy),
              l.canceledNavigationResolution &&
                (u.canceledNavigationResolution =
                  l.canceledNavigationResolution);
          })(P, Fe),
          Fe
        );
      }
      let on = (() => {
        class l {
          constructor(s, h, v, M, P, R, ee) {
            (this.rootComponentType = s),
              (this.urlSerializer = h),
              (this.rootContexts = v),
              (this.location = M),
              (this.config = ee),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new z.x()),
              (this.errorHandler = ca),
              (this.malformedUriErrorHandler = da),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.afterPreactivation = () => (0, Z.of)(void 0)),
              (this.urlHandlingStrategy = new ua()),
              (this.routeReuseStrategy = new vl()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.configLoader = P.get(Uo)),
              (this.configLoader.onLoadEndListener = (It) =>
                this.triggerEvent(new ys(It))),
              (this.configLoader.onLoadStartListener = (It) =>
                this.triggerEvent(new Ti(It))),
              (this.ngModule = P.get(f.h0i)),
              (this.console = P.get(f.c2e));
            const Fe = P.get(f.R0b);
            (this.isNgZoneEnabled =
              Fe instanceof f.R0b && f.R0b.isInAngularZone()),
              this.resetConfig(ee),
              (this.currentUrlTree = (function Ce() {
                return new St(new Je([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = pr(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new X.X({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            return this.location.getState()?.ɵrouterPageId;
          }
          setupNavigations(s) {
            const h = this.events;
            return s.pipe(
              (0, ze.h)((v) => 0 !== v.id),
              (0, fe.U)((v) => ({
                ...v,
                extractedUrl: this.urlHandlingStrategy.extract(v.rawUrl),
              })),
              He((v) => {
                let M = !1,
                  P = !1;
                return (0, Z.of)(v).pipe(
                  (0, ut.b)((R) => {
                    this.currentNavigation = {
                      id: R.id,
                      initialUrl: R.rawUrl,
                      extractedUrl: R.extractedUrl,
                      trigger: R.source,
                      extras: R.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? {
                            ...this.lastSuccessfulNavigation,
                            previousNavigation: null,
                          }
                        : null,
                    };
                  }),
                  He((R) => {
                    const ee = this.browserUrlTree.toString(),
                      Ie =
                        !this.navigated ||
                        R.extractedUrl.toString() !== ee ||
                        ee !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || Ie) &&
                      this.urlHandlingStrategy.shouldProcessUrl(R.rawUrl)
                    )
                      return (
                        _o(R.source) && (this.browserUrlTree = R.extractedUrl),
                        (0, Z.of)(R).pipe(
                          He((Fe) => {
                            const It = this.transitions.getValue();
                            return (
                              h.next(
                                new io(
                                  Fe.id,
                                  this.serializeUrl(Fe.extractedUrl),
                                  Fe.source,
                                  Fe.restoredState
                                )
                              ),
                              It !== this.transitions.getValue()
                                ? ae.E
                                : Promise.resolve(Fe)
                            );
                          }),
                          (function ws(l, u, s, h) {
                            return He((v) =>
                              (function Li(l, u, s, h, v) {
                                return new Vi(l, u, s, h, v).apply();
                              })(l, u, s, v.extractedUrl, h).pipe(
                                (0, fe.U)((M) => ({
                                  ...v,
                                  urlAfterRedirects: M,
                                }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          (0, ut.b)((Fe) => {
                            (this.currentNavigation = {
                              ...this.currentNavigation,
                              finalUrl: Fe.urlAfterRedirects,
                            }),
                              (v.urlAfterRedirects = Fe.urlAfterRedirects);
                          }),
                          (function Bi(l, u, s, h, v, M) {
                            return (0, dt.z)((P) =>
                              (function ui(
                                l,
                                u,
                                s,
                                h,
                                v,
                                M,
                                P = "emptyOnly",
                                R = "legacy"
                              ) {
                                return new ul(l, u, s, h, v, P, R, M)
                                  .recognize()
                                  .pipe(
                                    He((ee) =>
                                      null === ee
                                        ? (function Yr(l) {
                                            return new _e.y((u) => u.error(l));
                                          })(new ll())
                                        : (0, Z.of)(ee)
                                    )
                                  );
                              })(
                                l,
                                u,
                                s,
                                P.urlAfterRedirects,
                                h.serialize(P.urlAfterRedirects),
                                h,
                                v,
                                M
                              ).pipe(
                                (0, fe.U)((R) => ({ ...P, targetSnapshot: R }))
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.rootComponentType,
                            this.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          (0, ut.b)((Fe) => {
                            if (
                              ((v.targetSnapshot = Fe.targetSnapshot),
                              "eager" === this.urlUpdateStrategy)
                            ) {
                              if (!Fe.extras.skipLocationChange) {
                                const mn = this.urlHandlingStrategy.merge(
                                  Fe.urlAfterRedirects,
                                  Fe.rawUrl
                                );
                                this.setBrowserUrl(mn, Fe);
                              }
                              this.browserUrlTree = Fe.urlAfterRedirects;
                            }
                            const It = new Eo(
                              Fe.id,
                              this.serializeUrl(Fe.extractedUrl),
                              this.serializeUrl(Fe.urlAfterRedirects),
                              Fe.targetSnapshot
                            );
                            h.next(It);
                          })
                        )
                      );
                    if (
                      Ie &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: It,
                          extractedUrl: mn,
                          source: or,
                          restoredState: Zo,
                          extras: Mn,
                        } = R,
                        Zi = new io(It, this.serializeUrl(mn), or, Zo);
                      h.next(Zi);
                      const Jr = pr(mn, this.rootComponentType).snapshot;
                      return (
                        (v = {
                          ...R,
                          targetSnapshot: Jr,
                          urlAfterRedirects: mn,
                          extras: {
                            ...Mn,
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          },
                        }),
                        (0, Z.of)(v)
                      );
                    }
                    return (this.rawUrlTree = R.rawUrl), R.resolve(null), ae.E;
                  }),
                  (0, ut.b)((R) => {
                    const ee = new Mo(
                      R.id,
                      this.serializeUrl(R.extractedUrl),
                      this.serializeUrl(R.urlAfterRedirects),
                      R.targetSnapshot
                    );
                    this.triggerEvent(ee);
                  }),
                  (0, fe.U)(
                    (R) =>
                      (v = {
                        ...R,
                        guards: Ni(
                          R.targetSnapshot,
                          R.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                  ),
                  (function ur(l, u) {
                    return (0, dt.z)((s) => {
                      const {
                        targetSnapshot: h,
                        currentSnapshot: v,
                        guards: {
                          canActivateChecks: M,
                          canDeactivateChecks: P,
                        },
                      } = s;
                      return 0 === P.length && 0 === M.length
                        ? (0, Z.of)({ ...s, guardsResult: !0 })
                        : (function Cs(l, u, s, h) {
                            return (0, w.D)(l).pipe(
                              (0, dt.z)((v) =>
                                (function g(l, u, s, h, v) {
                                  const M =
                                    u && u.routeConfig
                                      ? u.routeConfig.canDeactivate
                                      : null;
                                  if (!M || 0 === M.length)
                                    return (0, Z.of)(!0);
                                  const P = M.map((R) => {
                                    const ee = Wr(u) ?? v,
                                      Ie = st(R, ee);
                                    return k(
                                      (function Pn(l) {
                                        return l && m(l.canDeactivate);
                                      })(Ie)
                                        ? Ie.canDeactivate(l, u, s, h)
                                        : ee.runInContext(() => Ie(l, u, s, h))
                                    ).pipe(Nt());
                                  });
                                  return (0, Z.of)(P).pipe(nr());
                                })(v.component, v.route, s, u, h)
                              ),
                              Nt((v) => !0 !== v, !0)
                            );
                          })(P, h, v, l).pipe(
                            (0, dt.z)((R) =>
                              R &&
                              (function T(l) {
                                return "boolean" == typeof l;
                              })(R)
                                ? (function Ds(l, u, s, h) {
                                    return (0, w.D)(u).pipe(
                                      (0, Ct.b)((v) =>
                                        ce(
                                          (function ia(l, u) {
                                            return (
                                              null !== l && u && u(new ei(l)),
                                              (0, Z.of)(!0)
                                            );
                                          })(v.route.parent, h),
                                          (function oa(l, u) {
                                            return (
                                              null !== l && u && u(new ni(l)),
                                              (0, Z.of)(!0)
                                            );
                                          })(v.route, h),
                                          (function ki(l, u, s) {
                                            const h = u[u.length - 1],
                                              M = u
                                                .slice(0, u.length - 1)
                                                .reverse()
                                                .map((P) =>
                                                  (function ve(l) {
                                                    const u = l.routeConfig
                                                      ? l.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return u && 0 !== u.length
                                                      ? { node: l, guards: u }
                                                      : null;
                                                  })(P)
                                                )
                                                .filter((P) => null !== P)
                                                .map((P) =>
                                                  H(() => {
                                                    const R = P.guards.map(
                                                      (ee) => {
                                                        const Ie =
                                                            Wr(P.node) ?? s,
                                                          Xe = st(ee, Ie);
                                                        return k(
                                                          (function Bt(l) {
                                                            return (
                                                              l &&
                                                              m(
                                                                l.canActivateChild
                                                              )
                                                            );
                                                          })(Xe)
                                                            ? Xe.canActivateChild(
                                                                h,
                                                                l
                                                              )
                                                            : Ie.runInContext(
                                                                () => Xe(h, l)
                                                              )
                                                        ).pipe(Nt());
                                                      }
                                                    );
                                                    return (0, Z.of)(R).pipe(
                                                      nr()
                                                    );
                                                  })
                                                );
                                            return (0, Z.of)(M).pipe(nr());
                                          })(l, v.path, s),
                                          (function Ri(l, u, s) {
                                            const h = u.routeConfig
                                              ? u.routeConfig.canActivate
                                              : null;
                                            if (!h || 0 === h.length)
                                              return (0, Z.of)(!0);
                                            const v = h.map((M) =>
                                              H(() => {
                                                const P = Wr(u) ?? s,
                                                  R = st(M, P);
                                                return k(
                                                  (function Ve(l) {
                                                    return (
                                                      l && m(l.canActivate)
                                                    );
                                                  })(R)
                                                    ? R.canActivate(u, l)
                                                    : P.runInContext(() =>
                                                        R(u, l)
                                                      )
                                                ).pipe(Nt());
                                              })
                                            );
                                            return (0, Z.of)(v).pipe(nr());
                                          })(l, v.route, s)
                                        )
                                      ),
                                      Nt((v) => !0 !== v, !0)
                                    );
                                  })(h, M, l, u)
                                : (0, Z.of)(R)
                            ),
                            (0, fe.U)((R) => ({ ...s, guardsResult: R }))
                          );
                    });
                  })(this.ngModule.injector, (R) => this.triggerEvent(R)),
                  (0, ut.b)((R) => {
                    if (((v.guardsResult = R.guardsResult), fn(R.guardsResult)))
                      throw gr(0, R.guardsResult);
                    const ee = new So(
                      R.id,
                      this.serializeUrl(R.extractedUrl),
                      this.serializeUrl(R.urlAfterRedirects),
                      R.targetSnapshot,
                      !!R.guardsResult
                    );
                    this.triggerEvent(ee);
                  }),
                  (0, ze.h)(
                    (R) =>
                      !!R.guardsResult ||
                      (this.restoreHistory(R),
                      this.cancelNavigationTransition(R, "", 3),
                      !1)
                  ),
                  Lo((R) => {
                    if (R.guards.canActivateChecks.length)
                      return (0, Z.of)(R).pipe(
                        (0, ut.b)((ee) => {
                          const Ie = new Qo(
                            ee.id,
                            this.serializeUrl(ee.extractedUrl),
                            this.serializeUrl(ee.urlAfterRedirects),
                            ee.targetSnapshot
                          );
                          this.triggerEvent(Ie);
                        }),
                        He((ee) => {
                          let Ie = !1;
                          return (0, Z.of)(ee).pipe(
                            (function aa(l, u) {
                              return (0, dt.z)((s) => {
                                const {
                                  targetSnapshot: h,
                                  guards: { canActivateChecks: v },
                                } = s;
                                if (!v.length) return (0, Z.of)(s);
                                let M = 0;
                                return (0, w.D)(v).pipe(
                                  (0, Ct.b)((P) =>
                                    (function la(l, u, s, h) {
                                      const v = l.routeConfig,
                                        M = l._resolve;
                                      return (
                                        void 0 !== v?.title &&
                                          !Ui(v) &&
                                          (M[an] = v.title),
                                        (function Ro(l, u, s, h) {
                                          const v = (function pl(l) {
                                            return [
                                              ...Object.keys(l),
                                              ...Object.getOwnPropertySymbols(
                                                l
                                              ),
                                            ];
                                          })(l);
                                          if (0 === v.length)
                                            return (0, Z.of)({});
                                          const M = {};
                                          return (0, w.D)(v).pipe(
                                            (0, dt.z)((P) =>
                                              (function ko(l, u, s, h) {
                                                const v = Wr(u) ?? h,
                                                  M = st(l, v);
                                                return k(
                                                  M.resolve
                                                    ? M.resolve(u, s)
                                                    : v.runInContext(() =>
                                                        M(u, s)
                                                      )
                                                );
                                              })(l[P], u, s, h).pipe(
                                                Nt(),
                                                (0, ut.b)((R) => {
                                                  M[P] = R;
                                                })
                                              )
                                            ),
                                            Sn(1),
                                            (function sn(l) {
                                              return (0, fe.U)(() => l);
                                            })(M),
                                            tt((P) => (gn(P) ? ae.E : ne(P)))
                                          );
                                        })(M, l, u, h).pipe(
                                          (0, fe.U)(
                                            (P) => (
                                              (l._resolvedData = P),
                                              (l.data = xi(l, s).resolve),
                                              v &&
                                                Ui(v) &&
                                                (l.data[an] = v.title),
                                              null
                                            )
                                          )
                                        )
                                      );
                                    })(P.route, h, l, u)
                                  ),
                                  (0, ut.b)(() => M++),
                                  Sn(1),
                                  (0, dt.z)((P) =>
                                    M === v.length ? (0, Z.of)(s) : ae.E
                                  )
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            (0, ut.b)({
                              next: () => (Ie = !0),
                              complete: () => {
                                Ie ||
                                  (this.restoreHistory(ee),
                                  this.cancelNavigationTransition(ee, "", 2));
                              },
                            })
                          );
                        }),
                        (0, ut.b)((ee) => {
                          const Ie = new Xo(
                            ee.id,
                            this.serializeUrl(ee.extractedUrl),
                            this.serializeUrl(ee.urlAfterRedirects),
                            ee.targetSnapshot
                          );
                          this.triggerEvent(Ie);
                        })
                      );
                  }),
                  Lo((R) => {
                    const ee = (Ie) => {
                      const Xe = [];
                      Ie.routeConfig?.loadComponent &&
                        !Ie.routeConfig._loadedComponent &&
                        Xe.push(
                          this.configLoader.loadComponent(Ie.routeConfig).pipe(
                            (0, ut.b)((Fe) => {
                              Ie.component = Fe;
                            }),
                            (0, fe.U)(() => {})
                          )
                        );
                      for (const Fe of Ie.children) Xe.push(...ee(Fe));
                      return Xe;
                    };
                    return Oe(ee(R.targetSnapshot.root)).pipe(
                      qt(),
                      (0, qe.q)(1)
                    );
                  }),
                  Lo(() => this.afterPreactivation()),
                  (0, fe.U)((R) => {
                    const ee = (function Io(l, u, s) {
                      const h = Hr(l, u._root, s ? s._root : void 0);
                      return new Mr(h, u);
                    })(
                      this.routeReuseStrategy,
                      R.targetSnapshot,
                      R.currentRouterState
                    );
                    return (v = { ...R, targetRouterState: ee });
                  }),
                  (0, ut.b)((R) => {
                    (this.currentUrlTree = R.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        R.urlAfterRedirects,
                        R.rawUrl
                      )),
                      (this.routerState = R.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (R.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, R),
                        (this.browserUrlTree = R.urlAfterRedirects));
                  }),
                  ((l, u, s) =>
                    (0, fe.U)(
                      (h) => (
                        new Fi(
                          u,
                          h.targetRouterState,
                          h.currentRouterState,
                          s
                        ).activate(l),
                        h
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (R) =>
                    this.triggerEvent(R)
                  ),
                  (0, ut.b)({
                    next() {
                      M = !0;
                    },
                    complete() {
                      M = !0;
                    },
                  }),
                  Xt(() => {
                    M || P || this.cancelNavigationTransition(v, "", 1),
                      this.currentNavigation?.id === v.id &&
                        (this.currentNavigation = null);
                  }),
                  tt((R) => {
                    if (((P = !0), xo(R))) {
                      Bn(R) ||
                        ((this.navigated = !0), this.restoreHistory(v, !0));
                      const ee = new Xn(
                        v.id,
                        this.serializeUrl(v.extractedUrl),
                        R.message,
                        R.cancellationCode
                      );
                      if ((h.next(ee), Bn(R))) {
                        const Ie = this.urlHandlingStrategy.merge(
                            R.url,
                            this.rawUrlTree
                          ),
                          Xe = {
                            skipLocationChange: v.extras.skipLocationChange,
                            replaceUrl:
                              "eager" === this.urlUpdateStrategy ||
                              _o(v.source),
                          };
                        this.scheduleNavigation(Ie, "imperative", null, Xe, {
                          resolve: v.resolve,
                          reject: v.reject,
                          promise: v.promise,
                        });
                      } else v.resolve(!1);
                    } else {
                      this.restoreHistory(v, !0);
                      const ee = new pn(
                        v.id,
                        this.serializeUrl(v.extractedUrl),
                        R,
                        v.targetSnapshot ?? void 0
                      );
                      h.next(ee);
                      try {
                        v.resolve(this.errorHandler(R));
                      } catch (Ie) {
                        v.reject(Ie);
                      }
                    }
                    return ae.E;
                  })
                );
              })
            );
          }
          resetRootComponentType(s) {
            (this.rootComponentType = s),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(s) {
            this.transitions.next({ ...this.transitions.value, ...s });
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((s) => {
                const h = "popstate" === s.type ? "popstate" : "hashchange";
                "popstate" === h &&
                  setTimeout(() => {
                    const v = { replaceUrl: !0 },
                      M = s.state?.navigationId ? s.state : null;
                    if (M) {
                      const R = { ...M };
                      delete R.navigationId,
                        delete R.ɵrouterPageId,
                        0 !== Object.keys(R).length && (v.state = R);
                    }
                    const P = this.parseUrl(s.url);
                    this.scheduleNavigation(P, h, M, v);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(s) {
            this.events.next(s);
          }
          resetConfig(s) {
            (this.config = s.map(Ke)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(s, h = {}) {
            const {
                relativeTo: v,
                queryParams: M,
                fragment: P,
                queryParamsHandling: R,
                preserveFragment: ee,
              } = h,
              Ie = v || this.routerState.root,
              Xe = ee ? this.currentUrlTree.fragment : P;
            let Fe = null;
            switch (R) {
              case "merge":
                Fe = { ...this.currentUrlTree.queryParams, ...M };
                break;
              case "preserve":
                Fe = this.currentUrlTree.queryParams;
                break;
              default:
                Fe = M || null;
            }
            return (
              null !== Fe && (Fe = this.removeEmptyProps(Fe)),
              wr(Ie, this.currentUrlTree, s, Fe, Xe ?? null)
            );
          }
          navigateByUrl(s, h = { skipLocationChange: !1 }) {
            const v = fn(s) ? s : this.parseUrl(s),
              M = this.urlHandlingStrategy.merge(v, this.rawUrlTree);
            return this.scheduleNavigation(M, "imperative", null, h);
          }
          navigate(s, h = { skipLocationChange: !1 }) {
            return (
              (function ha(l) {
                for (let u = 0; u < l.length; u++) {
                  if (null == l[u]) throw new f.vHH(4008, false);
                }
              })(s),
              this.navigateByUrl(this.createUrlTree(s, h), h)
            );
          }
          serializeUrl(s) {
            return this.urlSerializer.serialize(s);
          }
          parseUrl(s) {
            let h;
            try {
              h = this.urlSerializer.parse(s);
            } catch (v) {
              h = this.malformedUriErrorHandler(v, this.urlSerializer, s);
            }
            return h;
          }
          isActive(s, h) {
            let v;
            if (((v = !0 === h ? { ...Cl } : !1 === h ? { ...ji } : h), fn(s)))
              return gt(this.currentUrlTree, s, v);
            const M = this.parseUrl(s);
            return gt(this.currentUrlTree, M, v);
          }
          removeEmptyProps(s) {
            return Object.keys(s).reduce((h, v) => {
              const M = s[v];
              return null != M && (h[v] = M), h;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (s) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = s.id),
                  (this.currentPageId = s.targetPageId),
                  this.events.next(
                    new Vt(
                      s.id,
                      this.serializeUrl(s.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  this.titleStrategy?.updateTitle(this.routerState.snapshot),
                  s.resolve(!0);
              },
              (s) => {
                this.console.warn(`Unhandled Navigation Error: ${s}`);
              }
            );
          }
          scheduleNavigation(s, h, v, M, P) {
            if (this.disposed) return Promise.resolve(!1);
            let R, ee, Ie;
            P
              ? ((R = P.resolve), (ee = P.reject), (Ie = P.promise))
              : (Ie = new Promise((It, mn) => {
                  (R = It), (ee = mn);
                }));
            const Xe = ++this.navigationId;
            let Fe;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (v = this.location.getState()),
                  (Fe =
                    v && v.ɵrouterPageId
                      ? v.ɵrouterPageId
                      : M.replaceUrl || M.skipLocationChange
                      ? this.browserPageId ?? 0
                      : (this.browserPageId ?? 0) + 1))
                : (Fe = 0),
              this.setTransition({
                id: Xe,
                targetPageId: Fe,
                source: h,
                restoredState: v,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: s,
                extras: M,
                resolve: R,
                reject: ee,
                promise: Ie,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              Ie.catch((It) => Promise.reject(It))
            );
          }
          setBrowserUrl(s, h) {
            const v = this.urlSerializer.serialize(s),
              M = {
                ...h.extras.state,
                ...this.generateNgRouterState(h.id, h.targetPageId),
              };
            this.location.isCurrentPathEqualTo(v) || h.extras.replaceUrl
              ? this.location.replaceState(v, "", M)
              : this.location.go(v, "", M);
          }
          restoreHistory(s, h = !1) {
            if ("computed" === this.canceledNavigationResolution) {
              const v = this.currentPageId - s.targetPageId;
              ("popstate" !== s.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !== this.currentNavigation?.finalUrl) ||
              0 === v
                ? this.currentUrlTree === this.currentNavigation?.finalUrl &&
                  0 === v &&
                  (this.resetState(s),
                  (this.browserUrlTree = s.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(v);
            } else
              "replace" === this.canceledNavigationResolution &&
                (h && this.resetState(s), this.resetUrlToCurrentUrlTree());
          }
          resetState(s) {
            (this.routerState = s.currentRouterState),
              (this.currentUrlTree = s.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                s.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(s, h, v) {
            const M = new Xn(s.id, this.serializeUrl(s.extractedUrl), h, v);
            this.triggerEvent(M), s.resolve(!1);
          }
          generateNgRouterState(s, h) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: s, ɵrouterPageId: h }
              : { navigationId: s };
          }
        }
        return (
          (l.ɵfac = function (s) {
            f.$Z();
          }),
          (l.ɵprov = f.Yz7({
            token: l,
            factory: function () {
              return fa();
            },
            providedIn: "root",
          })),
          l
        );
      })();
      function _o(l) {
        return "imperative" !== l;
      }
      let $i = (() => {
          class l {
            constructor(s, h, v, M, P) {
              (this.router = s),
                (this.route = h),
                (this.tabIndexAttribute = v),
                (this.renderer = M),
                (this.el = P),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.commands = null),
                (this.onChanges = new z.x()),
                this.setTabIndexIfNotOnNativeEl("0");
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, f.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, f.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, f.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            setTabIndexIfNotOnNativeEl(s) {
              if (null != this.tabIndexAttribute) return;
              const h = this.renderer,
                v = this.el.nativeElement;
              null !== s
                ? h.setAttribute(v, "tabindex", s)
                : h.removeAttribute(v, "tabindex");
            }
            ngOnChanges(s) {
              this.onChanges.next(this);
            }
            set routerLink(s) {
              null != s
                ? ((this.commands = Array.isArray(s) ? s : [s]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick() {
              return (
                null === this.urlTree ||
                  this.router.navigateByUrl(this.urlTree, {
                    skipLocationChange: this.skipLocationChange,
                    replaceUrl: this.replaceUrl,
                    state: this.state,
                  }),
                !0
              );
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(
                f.Y36(on),
                f.Y36(er),
                f.$8M("tabindex"),
                f.Y36(f.Qsj),
                f.Y36(f.SBq)
              );
            }),
            (l.ɵdir = f.lG2({
              type: l,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (s, h) {
                1 & s &&
                  f.NdJ("click", function () {
                    return h.onClick();
                  });
              },
              inputs: {
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [f.TTD],
            })),
            l
          );
        })(),
        gi = (() => {
          class l {
            constructor(s, h, v) {
              (this.router = s),
                (this.route = h),
                (this.locationStrategy = v),
                (this._preserveFragment = !1),
                (this._skipLocationChange = !1),
                (this._replaceUrl = !1),
                (this.commands = null),
                (this.href = null),
                (this.onChanges = new z.x()),
                (this.subscription = s.events.subscribe((M) => {
                  M instanceof Vt && this.updateTargetUrlAndHref();
                }));
            }
            set preserveFragment(s) {
              this._preserveFragment = (0, f.D6c)(s);
            }
            get preserveFragment() {
              return this._preserveFragment;
            }
            set skipLocationChange(s) {
              this._skipLocationChange = (0, f.D6c)(s);
            }
            get skipLocationChange() {
              return this._skipLocationChange;
            }
            set replaceUrl(s) {
              this._replaceUrl = (0, f.D6c)(s);
            }
            get replaceUrl() {
              return this._replaceUrl;
            }
            set routerLink(s) {
              this.commands = null != s ? (Array.isArray(s) ? s : [s]) : null;
            }
            ngOnChanges(s) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(s, h, v, M, P) {
              return (
                !!(
                  0 !== s ||
                  h ||
                  v ||
                  M ||
                  P ||
                  ("string" == typeof this.target && "_self" != this.target) ||
                  null === this.urlTree
                ) ||
                (this.router.navigateByUrl(this.urlTree, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                }),
                !1)
              );
            }
            updateTargetUrlAndHref() {
              this.href =
                null !== this.urlTree
                  ? this.locationStrategy.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(f.Y36(on), f.Y36(er), f.Y36(Te.S$));
            }),
            (l.ɵdir = f.lG2({
              type: l,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (s, h) {
                1 & s &&
                  f.NdJ("click", function (M) {
                    return h.onClick(
                      M.button,
                      M.ctrlKey,
                      M.shiftKey,
                      M.altKey,
                      M.metaKey
                    );
                  }),
                  2 & s && f.uIk("target", h.target)("href", h.href, f.LSH);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                relativeTo: "relativeTo",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [f.TTD],
            })),
            l
          );
        })(),
        Gi = (() => {
          class l {
            constructor(s, h, v, M, P, R) {
              (this.router = s),
                (this.element = h),
                (this.renderer = v),
                (this.cdr = M),
                (this.link = P),
                (this.linkWithHref = R),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.isActiveChange = new f.vpe()),
                (this.routerEventsSubscription = s.events.subscribe((ee) => {
                  ee instanceof Vt && this.update();
                }));
            }
            ngAfterContentInit() {
              (0, Z.of)(
                this.links.changes,
                this.linksWithHrefs.changes,
                (0, Z.of)(null)
              )
                .pipe((0, je.J)())
                .subscribe((s) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              this.linkInputChangesSubscription?.unsubscribe();
              const s = [
                ...this.links.toArray(),
                ...this.linksWithHrefs.toArray(),
                this.link,
                this.linkWithHref,
              ]
                .filter((h) => !!h)
                .map((h) => h.onChanges);
              this.linkInputChangesSubscription = (0, w.D)(s)
                .pipe((0, je.J)())
                .subscribe((h) => {
                  this.isActive !== this.isLinkActive(this.router)(h) &&
                    this.update();
                });
            }
            set routerLinkActive(s) {
              const h = Array.isArray(s) ? s : s.split(" ");
              this.classes = h.filter((v) => !!v);
            }
            ngOnChanges(s) {
              this.update();
            }
            ngOnDestroy() {
              this.routerEventsSubscription.unsubscribe(),
                this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
              !this.links ||
                !this.linksWithHrefs ||
                !this.router.navigated ||
                Promise.resolve().then(() => {
                  const s = this.hasActiveLinks();
                  this.isActive !== s &&
                    ((this.isActive = s),
                    this.cdr.markForCheck(),
                    this.classes.forEach((h) => {
                      s
                        ? this.renderer.addClass(this.element.nativeElement, h)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            h
                          );
                    }),
                    s && void 0 !== this.ariaCurrentWhenActive
                      ? this.renderer.setAttribute(
                          this.element.nativeElement,
                          "aria-current",
                          this.ariaCurrentWhenActive.toString()
                        )
                      : this.renderer.removeAttribute(
                          this.element.nativeElement,
                          "aria-current"
                        ),
                    this.isActiveChange.emit(s));
                });
            }
            isLinkActive(s) {
              const h = (function Dl(l) {
                return !!l.paths;
              })(this.routerLinkActiveOptions)
                ? this.routerLinkActiveOptions
                : this.routerLinkActiveOptions.exact || !1;
              return (v) => !!v.urlTree && s.isActive(v.urlTree, h);
            }
            hasActiveLinks() {
              const s = this.isLinkActive(this.router);
              return (
                (this.link && s(this.link)) ||
                (this.linkWithHref && s(this.linkWithHref)) ||
                this.links.some(s) ||
                this.linksWithHrefs.some(s)
              );
            }
          }
          return (
            (l.ɵfac = function (s) {
              return new (s || l)(
                f.Y36(on),
                f.Y36(f.SBq),
                f.Y36(f.Qsj),
                f.Y36(f.sBO),
                f.Y36($i, 8),
                f.Y36(gi, 8)
              );
            }),
            (l.ɵdir = f.lG2({
              type: l,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (s, h, v) {
                if ((1 & s && (f.Suo(v, $i, 5), f.Suo(v, gi, 5)), 2 & s)) {
                  let M;
                  f.iGM((M = f.CRH())) && (h.links = M),
                    f.iGM((M = f.CRH())) && (h.linksWithHrefs = M);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                ariaCurrentWhenActive: "ariaCurrentWhenActive",
                routerLinkActive: "routerLinkActive",
              },
              outputs: { isActiveChange: "isActiveChange" },
              exportAs: ["routerLinkActive"],
              standalone: !0,
              features: [f.TTD],
            })),
            l
          );
        })();
      class As {}
      let Ho = (() => {
        class l {
          constructor(s, h, v, M, P) {
            (this.router = s),
              (this.injector = v),
              (this.preloadingStrategy = M),
              (this.loader = P);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                (0, ze.h)((s) => s instanceof Vt),
                (0, Ct.b)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(s, h) {
            const v = [];
            for (const M of h) {
              M.providers &&
                !M._injector &&
                (M._injector = (0, f.MMx)(M.providers, s, `Route: ${M.path}`));
              const P = M._injector ?? s,
                R = M._loadedInjector ?? P;
              (M.loadChildren && !M._loadedRoutes && void 0 === M.canLoad) ||
              (M.loadComponent && !M._loadedComponent)
                ? v.push(this.preloadConfig(P, M))
                : (M.children || M._loadedRoutes) &&
                  v.push(this.processRoutes(R, M.children ?? M._loadedRoutes));
            }
            return (0, w.D)(v).pipe((0, je.J)());
          }
          preloadConfig(s, h) {
            return this.preloadingStrategy.preload(h, () => {
              let v;
              v =
                h.loadChildren && void 0 === h.canLoad
                  ? this.loader.loadChildren(s, h)
                  : (0, Z.of)(null);
              const M = v.pipe(
                (0, dt.z)((P) =>
                  null === P
                    ? (0, Z.of)(void 0)
                    : ((h._loadedRoutes = P.routes),
                      (h._loadedInjector = P.injector),
                      this.processRoutes(P.injector ?? s, P.routes))
                )
              );
              if (h.loadComponent && !h._loadedComponent) {
                const P = this.loader.loadComponent(h);
                return (0, w.D)([M, P]).pipe((0, je.J)());
              }
              return M;
            });
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(
              f.LFG(on),
              f.LFG(f.Sil),
              f.LFG(f.lqb),
              f.LFG(As),
              f.LFG(Uo)
            );
          }),
          (l.ɵprov = f.Yz7({ token: l, factory: l.ɵfac, providedIn: "root" })),
          l
        );
      })();
      const qr = new f.OlP("");
      let Ts = (() => {
        class l {
          constructor(s, h, v = {}) {
            (this.router = s),
              (this.viewportScroller = h),
              (this.options = v),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (v.scrollPositionRestoration =
                v.scrollPositionRestoration || "disabled"),
              (v.anchorScrolling = v.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.router.events.subscribe((s) => {
              s instanceof io
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = s.navigationTrigger),
                  (this.restoredId = s.restoredState
                    ? s.restoredState.navigationId
                    : 0))
                : s instanceof Vt &&
                  ((this.lastId = s.id),
                  this.scheduleScrollEvent(
                    s,
                    this.router.parseUrl(s.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.router.events.subscribe((s) => {
              s instanceof Ao &&
                (s.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(s.position)
                  : s.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(s.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(s, h) {
            this.router.triggerEvent(
              new Ao(
                s,
                "popstate" === this.lastSource
                  ? this.store[this.restoredId]
                  : null,
                h
              )
            );
          }
          ngOnDestroy() {
            this.routerEventsSubscription &&
              this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription &&
                this.scrollEventsSubscription.unsubscribe();
          }
        }
        return (
          (l.ɵfac = function (s) {
            f.$Z();
          }),
          (l.ɵprov = f.Yz7({ token: l, factory: l.ɵfac })),
          l
        );
      })();
      function $o(l, u) {
        return { ɵkind: l, ɵproviders: u };
      }
      function Tt(l) {
        return [{ provide: Bo, multi: !0, useValue: l }];
      }
      function bl() {
        const l = (0, f.f3M)(f.zs3);
        return (u) => {
          const s = l.get(f.z2F);
          if (u !== s.components[0]) return;
          const h = l.get(on),
            v = l.get(El);
          1 === l.get(ga) && h.initialNavigation(),
            l.get(Go, null, f.XFs.Optional)?.setUpPreloading(),
            l.get(qr, null, f.XFs.Optional)?.init(),
            h.resetRootComponentType(s.componentTypes[0]),
            v.next(),
            v.complete();
        };
      }
      const El = new f.OlP("", { factory: () => new z.x() }),
        ga = new f.OlP("", { providedIn: "root", factory: () => 1 });
      const Go = new f.OlP("");
      function Gc(l) {
        return $o(0, [
          { provide: Go, useExisting: Ho },
          { provide: As, useExisting: l },
        ]);
      }
      const zo = new f.OlP("ROUTER_FORROOT_GUARD"),
        zc = [
          Te.Ye,
          { provide: zn, useClass: Zn },
          { provide: on, useFactory: fa },
          ot,
          {
            provide: er,
            useFactory: function wl(l) {
              return l.routerState.root;
            },
            deps: [on],
          },
          Uo,
        ];
      function Ml() {
        return new f.PXZ("Router", on);
      }
      let Un = (() => {
        class l {
          constructor(s) {}
          static forRoot(s, h) {
            return {
              ngModule: l,
              providers: [
                zc,
                [],
                Tt(s),
                {
                  provide: zo,
                  useFactory: vi,
                  deps: [[on, new f.FiY(), new f.tp0()]],
                },
                { provide: Vo, useValue: h || {} },
                h?.useHash
                  ? { provide: Te.S$, useClass: Te.Do }
                  : { provide: Te.S$, useClass: Te.b0 },
                {
                  provide: qr,
                  useFactory: () => {
                    const l = (0, f.f3M)(on),
                      u = (0, f.f3M)(Te.EM),
                      s = (0, f.f3M)(Vo);
                    return (
                      s.scrollOffset && u.setOffset(s.scrollOffset),
                      new Ts(l, u, s)
                    );
                  },
                },
                h?.preloadingStrategy
                  ? Gc(h.preloadingStrategy).ɵproviders
                  : [],
                { provide: f.PXZ, multi: !0, useFactory: Ml },
                h?.initialNavigation ? va(h) : [],
                [
                  { provide: ya, useFactory: bl },
                  { provide: f.tb, multi: !0, useExisting: ya },
                ],
              ],
            };
          }
          static forChild(s) {
            return { ngModule: l, providers: [Tt(s)] };
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(f.LFG(zo, 8));
          }),
          (l.ɵmod = f.oAB({ type: l })),
          (l.ɵinj = f.cJS({ imports: [Gr] })),
          l
        );
      })();
      function vi(l) {
        return "guarded";
      }
      function va(l) {
        return [
          "disabled" === l.initialNavigation
            ? $o(3, [
                {
                  provide: f.ip1,
                  multi: !0,
                  useFactory: () => {
                    const u = (0, f.f3M)(on);
                    return () => {
                      u.setUpLocationChangeListener();
                    };
                  },
                },
                { provide: ga, useValue: 2 },
              ]).ɵproviders
            : [],
          "enabledBlocking" === l.initialNavigation
            ? $o(2, [
                { provide: ga, useValue: 0 },
                {
                  provide: f.ip1,
                  multi: !0,
                  deps: [f.zs3],
                  useFactory: (u) => {
                    const s = u.get(Te.V_, Promise.resolve());
                    let h = !1;
                    return () =>
                      s.then(
                        () =>
                          new Promise((M) => {
                            const P = u.get(on),
                              R = u.get(El);
                            (function v(M) {
                              u.get(on)
                                .events.pipe(
                                  (0, ze.h)(
                                    (R) =>
                                      R instanceof Vt ||
                                      R instanceof Xn ||
                                      R instanceof pn
                                  ),
                                  (0, fe.U)(
                                    (R) =>
                                      R instanceof Vt ||
                                      (R instanceof Xn &&
                                        (0 === R.code || 1 === R.code) &&
                                        null)
                                  ),
                                  (0, ze.h)((R) => null !== R),
                                  (0, qe.q)(1)
                                )
                                .subscribe(() => {
                                  M();
                                });
                            })(() => {
                              M(!0), (h = !0);
                            }),
                              (P.afterPreactivation = () => (
                                M(!0), h || R.closed ? (0, Z.of)(void 0) : R
                              )),
                              P.initialNavigation();
                          })
                      );
                  },
                },
              ]).ɵproviders
            : [],
        ];
      }
      const ya = new f.OlP("");
    },
  },
  (Ze) => {
    Ze((Ze.s = 9299));
  },
]);
