import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    flex: 1;
    padding: 51px 19px;
`

export const HeaderTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 34px;
    line-height: 40px;
`

export const SearchInputWrapper = styled.View`
    width: 100%;
    height: 54px;
    background-color: ${({ theme }) => theme.colors.blue100};
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    padding: 6px 14px;
`

export const SearchInput = styled.TextInput`
    color: ${({ theme }) => theme.colors.navy500};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 17px;
    line-height: 22px;
`

export const SearchInputIcon = styled(Feather)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.blue500};
    margin-right: 10px;
`

export const SearchLabelWrapper = styled.View`
    flex: 1;
`

export const SearchLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.blue500};
`

export const BookListContainer = styled.View`

`

export const BookListHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Period = styled.Text`

`

export const SortBy = styled.Text`
`

export const BookItem = styled.View`
    border: 1px solid ${({ theme }) => theme.colors.blue100};
    border-radius: 10px;
`

export const PriceContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.blue500};
    padding: 4px 8px;
    border-radius: 14px;
`

export const BookItemHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 54px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.blue100};
    padding: 15px 10px;
`

export const NavigateIcon = styled(Feather)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.blue300};
`

export const DeliveryInfo = styled.Text`

`

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.white};
`

export const BookItemRoutes = styled.View`
    padding-top: 12px;
`

export const Timeline = styled.View`
    position: absolute;
    height: 50%;
    width: 2px;
    top: 25%;
    left: 14px;
    background-color: ${({ theme }) => theme.colors.blue500};
`

export const BookItemRoute = styled.View`
    padding-left: 39px;
    margin-bottom: 14px;
`

export const RouteOriginIcon = styled.View`
    position: absolute;
    top: 27%;
    left: 10px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.blue500};
    border-radius: 5px;
`

export const RouteDeliveryDate = styled.Text`

`

export const RouteTitle = styled.Text`

`

export const RouteDestinationIcon = styled.View`
    position: absolute;
    top: 27%;
    left: 10px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.blue500};
`
