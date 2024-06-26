import { Trash } from '@phosphor-icons/react'
import { ButtonSecondary } from '../../../../components/ButtonSecondary'
import { InputNumber } from '../../../../components/Forms/InputNumber'
import { useCart } from '../../../../hooks/useCart'
import { ProductProps } from '../../../../utils/data/products'
import { format } from '../../../../utils/functions/formatter'
import { Actions, Details, Heading, ProductContainer } from './styles'

interface CartItemProps extends Pick<ProductProps, 'id' | 'title' | 'image' | 'price'> {
  quantity: number
}

interface ProductCardSimpleProps {
  product: CartItemProps
}

export function ProductCardSimple({ product }: ProductCardSimpleProps) {
  const { removeFromCart, updateCart } = useCart()
  const { id, title, image, price, quantity } = product

  function handleIncrementQuantity() {
    updateCart({ productId: id, quantity: quantity + 1 })
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      updateCart({ productId: id, quantity: quantity - 1 })
    }
  }

  function handleRemoveProductFromCart() {
    removeFromCart(id)
  }

  const isDecrementButtonDisabled = quantity === 1

  return (
    <ProductContainer>
      <img src={image} alt={title} />

      <Details>
        <Heading>
          <h3>{title}</h3>
          <span>{format.price(price)}</span>
        </Heading>

        <Actions>
          <InputNumber
            quantity={quantity}
            disableDecrementButton={isDecrementButtonDisabled}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <ButtonSecondary type="button" onClick={handleRemoveProductFromCart}>
            <Trash size={16} />
            Remover
          </ButtonSecondary>
        </Actions>
      </Details>
    </ProductContainer>
  )
}
