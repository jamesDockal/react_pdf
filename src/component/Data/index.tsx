import React, { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Data: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {},
  ref
) => {
  return (
    <div
      ref={ref}
      style={{
        width: 800,
      }}
    >
      <div
        className="container"
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "0 auto",
          //   justifyContent: "center",
        }}
      >
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src="../dist/img/img.jpeg"
              alt=""
              style={{
                height: 200,
                width: 200,
              }}
            />
          </div>
          <div>
            <label htmlFor="">
              Asos Enxovais Eireli <br />
              Rua 31, N° 942 <br />
              76.382-217 - Goaaianésia, GO <br />
              CNPJ: 34.113.771/0001-07, IE: 10.766.598-0 <br />
            </label>
          </div>
        </div>
        {/* /HEADER/ */}
        <div className="d-flex align-items-center justify-content-center">
          <strong>Pedido 10</strong>
        </div>
        {/* PEDIDO INFO */}
        <div className="row mt-3">
          <div className="col-12 p-1">
            <label htmlFor="">Cliente</label>
          </div>
          <div
            className="col-8 border border-secondary p-1"
            style={{
              marginTop: -14,
              fontSize: "0.85rem",
              height: 126,
            }}
          >
            <strong>rafael neves cavoli</strong> <br />
            Rua Raimundo De Farias Brito, Nº 289, bloco 7 apto 108 Referencia:
            Condominio Agua Marinha,
            <br />
            Bairro: Loteamento Sonho Dourado
            <br />
            Campos dos Goytacazes, RJ, 28030350, rnevesc.pm8t8ry+2-
            <br />
            ogq4tinjsheztgmzy@mail.mercadolivre.com
            <br />
          </div>

          <div
            className="col-4 "
            style={{
              marginTop: -14,
              fontSize: "0.9rem",
            }}
          >
            <div className="row">
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              >
                Número do Pedido
              </div>
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              >
                10
              </div>
            </div>

            <div className="row">
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              >
                Data
              </div>
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              >
                17/10/2021
              </div>
            </div>

            <div className="row">
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              >
                Data prevista
              </div>
              <div
                className="col-6 border border-secondary d-flex align-items-center justify-content-center "
                style={{
                  height: 42,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* /PEDIDO INFO/ */}
        {/* STORE */}
        <div className="row mt-3">
          <div className="col-12 p-1">
            <label htmlFor="">Loja</label>
          </div>
          <div
            className="col-6 border border-secondary p-1"
            style={{
              marginTop: -13,
            }}
          >
            <strong>Mercado Livre</strong>
          </div>
        </div>
        {/* /STORE/ */}
        {/* PEDIDO VENDA */}
        <div className="row mt-3">
          <div className="col-12 p-1">
            <label>Itens do Pedido de Venda</label>
          </div>
          <div
            className="col-12 border border-secondary"
            style={{ padding: "0 6px", marginTop: -12 }}
          >
            <div
              className="row align-items-center "
              style={{
                fontSize: "0.9rem",
              }}
            >
              <div
                className="col-5 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Descrição do produto/serviço</strong>
              </div>
              <div
                className="col-3 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Código</strong>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Un</strong>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Qtde</strong>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Valor Unitário</strong>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 40,
                }}
              >
                <strong>Valor Total</strong>
              </div>
            </div>

            <div
              className="row align-items-center"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              <div
                className="col-5 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>Colcha Montblanc casal / Queen cor:bege</span>
              </div>
              <div
                className="col-3 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>50</span>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>UN</span>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>2,00</span>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>137,99</span>
              </div>
              <div
                className="col-1 border border-secondary p-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <span>275,98</span>
              </div>
            </div>

            <div
              className="row"
              style={{
                fontSize: "0.85rem",
              }}
            >
              <div className="col-11 border border-secondary text-right">
                <strong>N° de itens</strong>
                <br />
                <strong>Soma das Qtdes</strong>
                <br />
                <strong>Total de produtos</strong>
                <br />
                <strong>Frete</strong>
                <br />
                <strong>Total do pedido</strong>
                <br />
              </div>
              <div className="col-1 border border-secondary">
                <span>1,00</span>
                <br />
                <span>2,00</span>
                <br />
                <span>275,98</span>
                <br />
                <span>29,90</span>
                <br />
                <span>305,88</span>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* /PEDIDO VENDA/ */}
        {/* PARCELAS */}
        <div className="row mt-3">
          <div
            className="col-12 p-1"
            style={{
              marginBottom: 0,
              paddingBottom: 0,
            }}
          >
            <label htmlFor="">Parcelas</label>
          </div>
          <div className="col-12 p-1" style={{ marginTop: -20 }}>
            <div
              className="row p-1"
              style={{
                fontSize: "0.9rem",
              }}
            >
              <div className="col-1">
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <strong>Dias</strong>
                  </div>
                  <div
                    className="col-12 border border-secondary p-1"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    30
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <strong>Data Vencimento</strong>
                  </div>
                  <div
                    className="col-12 border border-secondary p-1"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    19/11/2021
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <strong> Forma de Pagamento</strong>
                  </div>
                  <div
                    className="col-12 border border-secondary p-1"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    Conta a receber/pagar
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <strong>Valor</strong>
                  </div>
                  <div
                    className="col-12 border border-secondary p-1"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    305,88
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-12 border border-secondary p-1">
                    <strong>Observação</strong>
                  </div>
                  <div
                    className="col-12 border border-secondary p-1"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    Método de pagamento: pix
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /PARCELAS/ */}
        teste
        {/* OBSERVAÇÕES    */}
        <div className="row mt-3">
          <div className="col-12 p-1">
            <strong>Observações</strong>
          </div>
          <div
            className="col-12 p-1 border border-secondary"
            style={{
              marginTop: -6,
              height: 30,
            }}
          ></div>
        </div>
        {/* /OBSERVAÇÕES/    */}
      </div>
    </div>
  );
};

export default forwardRef(Data);
