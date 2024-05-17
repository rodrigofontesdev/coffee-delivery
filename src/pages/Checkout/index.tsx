import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { CartContext } from '../../contexts/CartContext'
import { ProductCardSimple } from './components/ProductCardSimple'
import {
  Address,
  AddressFormFields,
  CartDetails,
  CartSubtotal,
  CheckControl,
  CheckGroup,
  CheckLabel,
  CheckoutForm,
  Container,
  Delivery,
  InputControl,
  InputGroup,
  PaymentMethods,
  Subtotal,
} from './styles'

export function Checkout() {
  const { cart } = useContext(CartContext)

  return (
    <main>
      <Container>
        <CheckoutForm>
          <Delivery>
            <h2>Complete seu pedido</h2>

            <Address>
              <header>
                <MapPinLine size={22} />

                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>

              <AddressFormFields>
                <InputGroup $cols={5}>
                  <InputControl type="tel" name="zipcode" id="zipcode" placeholder="CEP" required />
                </InputGroup>

                <InputGroup $cols={12}>
                  <InputControl type="text" name="street" id="street" placeholder="Rua" required />
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl
                    type="text"
                    name="streetNumber"
                    id="streetNumber"
                    placeholder="Número"
                    required
                  />
                </InputGroup>

                <InputGroup $cols={7}>
                  <InputControl
                    type="text"
                    name="complement"
                    id="complement"
                    placeholder="Complemento"
                  />
                  <span>Opcional</span>
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl
                    type="text"
                    name="neighborhood"
                    id="neighborhood"
                    placeholder="Bairro"
                    required
                  />
                </InputGroup>

                <InputGroup $cols={5}>
                  <InputControl type="text" name="city" id="city" placeholder="Cidade" required />
                </InputGroup>

                <InputGroup $cols={2}>
                  <InputControl
                    type="text"
                    name="state"
                    id="state"
                    placeholder="UF"
                    maxLength={2}
                    pattern="[a-z]+"
                    required
                  />
                </InputGroup>
              </AddressFormFields>
            </Address>

            <PaymentMethods>
              <header>
                <CurrencyDollar size={22} />

                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>

              <div>
                <CheckGroup>
                  <CheckControl type="radio" name="paymentMethod" id="creditCard" />
                  <CheckLabel htmlFor="creditCard">
                    <CreditCard size={16} />
                    Cartão de crédito
                  </CheckLabel>
                </CheckGroup>

                <CheckGroup>
                  <CheckControl type="radio" name="paymentMethod" id="debitCard" />
                  <CheckLabel htmlFor="debitCard">
                    <Bank size={16} />
                    Cartão de débito
                  </CheckLabel>
                </CheckGroup>

                <CheckGroup>
                  <CheckControl type="radio" name="paymentMethod" id="inCash" />
                  <CheckLabel htmlFor="inCash">
                    <Money size={16} />
                    Dinheiro
                  </CheckLabel>
                </CheckGroup>
              </div>
            </PaymentMethods>
          </Delivery>

          <CartDetails>
            <h2>Cafés selecionados</h2>

            <CartSubtotal>
              {cart.map((product) => (
                <ProductCardSimple key={product.id} product={product} />
              ))}

              <Subtotal>
                <span>Total de itens</span>
                <span>R$ 29,70</span>

                <span>Entrega</span>
                <span>R$ 3,50</span>

                <span>Total</span>
                <span>R$ 33,20</span>

                <ButtonPrimary fill>Confirmar Pedido</ButtonPrimary>
              </Subtotal>
            </CartSubtotal>
          </CartDetails>
        </CheckoutForm>
      </Container>
    </main>
  )
}
