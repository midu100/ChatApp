import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { MessageSquare, Mail, Lock, User, ArrowRight } from 'lucide-react'
import InputField from '../components/common/InputField'
import { useSignUpMutation } from '../lib/api'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [signUp, { isLoading }] = useSignUpMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!fullName) return toast.error('Full Name is required')
    if(!email) return toast.error('Email is required')
    if(!password) return toast.error('Password is required')
    if(password.length < 6) return toast.error('Password must be at least 6 characters')

    try {
      const res = await signUp({ fullName, email, password }).unwrap()
      toast.success(res?.message || 'Registration Successful!')
      navigate('/login')
    } catch (err) {
      console.error(err)
      toast.error(err?.data?.message || err?.message || 'Registration Failed')
    }
  }

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-surface-dark overflow-hidden px-4 font-inter">
      {/* Background Orbs */}
      <div className="w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] absolute -top-10 -right-10 animate-pulse pointer-events-none" />
      <div className="w-[450px] h-[450px] rounded-full bg-primary/15 blur-[120px] absolute -bottom-10 -left-10 pointer-events-none" />
      <div className="w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px] absolute top-1/2 right-1/3 pointer-events-none" />

      {/* SignUp Card */}
      <div className="w-full max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_0_rgba(234,56,77,0.1)] rounded-2xl p-8 z-10 animate-fade-in">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4 transform hover:rotate-6 transition-transform duration-300">
            <MessageSquare size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
          <p className="text-sm text-white/50 mt-1">Join us and start chatting today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <InputField
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            icon={User}
            required
          />

          {/* Email */}
          <InputField
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={Mail}
            required
          />

          {/* Password */}
          <InputField
            label="Password"
            type="password"
            placeholder="Min. 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={Lock}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 text-white font-medium rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                <span>Signing Up...</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-white/40 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200 underline decoration-primary/20 underline-offset-4">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
