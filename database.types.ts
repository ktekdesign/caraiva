export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      availability: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: number
          init_date: string | null
          price_id: number
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          price_id: number
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          price_id?: number
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "availability_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      discounts: {
        Row: {
          code: string | null
          created_at: string | null
          end_date: string | null
          id: number
          init_date: string | null
          is_exclusive: boolean | null
          min_quantity: number | null
          name: string | null
          percent: number | null
          price_id: number | null
          product_category: string | null
          product_id: number | null
          updated_at: string | null
          valid_end_date: string | null
          valid_init_date: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          is_exclusive?: boolean | null
          min_quantity?: number | null
          name?: string | null
          percent?: number | null
          price_id?: number | null
          product_category?: string | null
          product_id?: number | null
          updated_at?: string | null
          valid_end_date?: string | null
          valid_init_date?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          is_exclusive?: boolean | null
          min_quantity?: number | null
          name?: string | null
          percent?: number | null
          price_id?: number | null
          product_category?: string | null
          product_id?: number | null
          updated_at?: string | null
          valid_end_date?: string | null
          valid_init_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discounts_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discounts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          discount: number | null
          end_date: string | null
          id: number
          init_date: string | null
          number_adults: number | null
          number_children: number | null
          number_pets: number | null
          order_id: number
          price_id: number
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          discount?: number | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          number_adults?: number | null
          number_children?: number | null
          number_pets?: number | null
          order_id: number
          price_id: number
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          discount?: number | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          number_adults?: number | null
          number_children?: number | null
          number_pets?: number | null
          order_id?: number
          price_id?: number
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          amount: number
          billing: Json | null
          created_at: string | null
          discount: number | null
          id: number
          payment: Json | null
          service_fee: number | null
          shipping: Json | null
          shipping_fee: number | null
          status: string | null
          tax_fee: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          billing?: Json | null
          created_at?: string | null
          discount?: number | null
          id?: never
          payment?: Json | null
          service_fee?: number | null
          shipping?: Json | null
          shipping_fee?: number | null
          status?: string | null
          tax_fee?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          billing?: Json | null
          created_at?: string | null
          discount?: number | null
          id?: never
          payment?: Json | null
          service_fee?: number | null
          shipping?: Json | null
          shipping_fee?: number | null
          status?: string | null
          tax_fee?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          amount_variant: Json | null
          capacity_max: number | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: number
          init_date: string | null
          name: string | null
          product_id: number
          unit_amount: number | null
          updated_at: string | null
        }
        Insert: {
          amount_variant?: Json | null
          capacity_max?: number | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          name?: string | null
          product_id: number
          unit_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          amount_variant?: Json | null
          capacity_max?: number | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: never
          init_date?: string | null
          name?: string | null
          product_id?: number
          unit_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          capacity_max: number | null
          category: string
          created_at: string | null
          description: string | null
          id: number
          localization: string | null
          metadata: Json | null
          name: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          capacity_max?: number | null
          category: string
          created_at?: string | null
          description?: string | null
          id?: never
          localization?: string | null
          metadata?: Json | null
          name: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          capacity_max?: number | null
          category?: string
          created_at?: string | null
          description?: string | null
          id?: never
          localization?: string | null
          metadata?: Json | null
          name?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
